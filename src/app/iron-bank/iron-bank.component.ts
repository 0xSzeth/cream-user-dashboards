import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { request, gql } from 'graphql-request';
import { ConstantsService } from '../constants.service';
import { HelpersService } from '../helpers.service';
import { TimeseriesService } from '../timeseries.service';

@Component({
  selector: 'app-iron-bank',
  templateUrl: './iron-bank.component.html',
  styleUrls: ['./iron-bank.component.css']
})
export class IronBankComponent implements OnInit {

  FIRST_INDEX: number = 1606780800;
  assetPricesUSD: PriceObject[] = [];

  totalValueLockedUSD: BigNumber = new BigNumber(0);
  totalValueSuppliedUSD: BigNumber = new BigNumber(0);
  totalValueBorrowedUSD: BigNumber = new BigNumber(0);
  totalUtilizationRate: BigNumber = new BigNumber(0);
  totalLoanOrigination: BigNumber = new BigNumber(0);
  totalLoanRevenue: BigNumber = new BigNumber(0);

  timeseriesdata: number[][] = [];
  timestamps: number[] = [];
  blocks: number[] = [];

  constructor(
    public helpers: HelpersService,
    public constants: ConstantsService,
    public timeseries: TimeseriesService,
  ) { }

  async ngOnInit() {
    this.loadData();
  }

  loadData() {
    const queryString = gql`
      {
        markets {
          id
          symbol
          underlyingAddress
          underlyingSymbol
          cash
          totalSupply
          exchangeRate
          totalBorrows
          totalInterestAccumulated
          reserveFactor
        }
      }
    `;
    request(
      this.constants.GRAPHQL_IRONBANK,
      queryString
    ).then((data: QueryResult) => this.handleData(data));
  }

  async handleData(data: QueryResult) {
    const markets = data.markets;

    let totalValueLockedUSD = new BigNumber(0);
    let totalValueSuppliedUSD = new BigNumber(0);
    let totalValueBorrowedUSD = new BigNumber(0);
    let totalLoanOriginationUSD = new BigNumber(0);
    let totalLoanRevenueUSD = new BigNumber(0);
    let assetPricesUSD: PriceObject[] = [];

    // fetch timeseries data
    this.timeseriesdata = await this.timeseries.getCustomTimeSeries(
      this.FIRST_INDEX,
      this.constants.DAY_IN_SEC,
      this.constants.CHAIN_ID.MAINNET
    );
    this.timestamps = this.timeseriesdata[0];
    this.blocks = this.timeseriesdata[1];

    Promise.all(
      markets.map(async (market) => {

        // calculate number of days since first index
        let days = (this.timeseries.getLatestUTCDate() - this.FIRST_INDEX + this.constants.DAY_IN_SEC) / this.constants.DAY_IN_SEC;
        if (days < 100) {
          days = 100;
        }

        // fetch the historical and current prices of the underlying asset in USD
        // @dev if days < 100 then coingecko api returns inaccurate timestamps
        // const assetPrices = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.MAINNET, days);

        // const assetPrices = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.MAINNET, days);
        const assetPrices = await this.helpers.getTokenPrice(market.underlyingAddress, this.blocks, this.timestamps);
        // const assetPriceUSD = assetPrices[assetPrices.length - 1][1];
        const assetPriceUSD = await this.helpers.getTokenPrice(market.underlyingAddress);

        // add the price object to the assetPricesUSD array
        const priceObject: PriceObject = {
          address: market.underlyingAddress,
          prices: assetPrices
        };
        assetPricesUSD.push(priceObject);
        // this.assetPricesUSD.push(priceObject);

        // get current asset price from asset price list
        //const assetPriceUSD = assetPrices[assetPrices.length - 1][1];

        // calculate total value locked in USD
        const assetTotalValueLockedUSD = new BigNumber(market.cash).times(assetPriceUSD);
        const assetTotalValueSuppliedUSD = new BigNumber(market.totalSupply).times(market.exchangeRate).times(assetPriceUSD);
        const assetTotalValueBorrowedUSD = new BigNumber(market.totalBorrows).times(assetPriceUSD);
        const assetTotalLoanOriginationUSD = new BigNumber(market.totalInterestAccumulated).times(assetPriceUSD);
        const assetTotalLoanRevenueUSD = assetTotalLoanOriginationUSD.times(market.reserveFactor).div(1e18);

        // add to the total amount of total value locked USD
        totalValueLockedUSD = totalValueLockedUSD.plus(assetTotalValueLockedUSD);
        totalValueSuppliedUSD = totalValueSuppliedUSD.plus(assetTotalValueSuppliedUSD);
        totalValueBorrowedUSD = totalValueBorrowedUSD.plus(assetTotalValueBorrowedUSD);
        totalLoanOriginationUSD = totalLoanOriginationUSD.plus(assetTotalLoanOriginationUSD);
        totalLoanRevenueUSD = totalLoanRevenueUSD.plus(assetTotalLoanRevenueUSD);

      })
    ).then(() => {
      this.totalValueLockedUSD = totalValueLockedUSD;
      this.totalValueSuppliedUSD = totalValueSuppliedUSD;
      this.totalValueBorrowedUSD = totalValueBorrowedUSD;
      this.totalUtilizationRate = totalValueBorrowedUSD.div(totalValueSuppliedUSD).times(100);
      this.totalLoanOrigination = totalLoanOriginationUSD;
      this.totalLoanRevenue = totalLoanRevenueUSD;
      this.assetPricesUSD = assetPricesUSD;
    });
  }

  numberWithCommas(x: number | BigNumber) {
    let y = x.toFixed(2);
    let number = y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return number;
  }

}

interface QueryResult {
  markets: {
    id: string;
    symbol: string;
    underlyingAddress: string;
    underlyingSymbol: string;
    cash: string;
    totalSupply: string;
    exchangeRate: string;
    totalBorrows: string;
    totalInterestAccumulated: string;
    reserveFactor: string;
  }[];
}

interface PriceObject {
  address: string;
  prices: number[][];
}
