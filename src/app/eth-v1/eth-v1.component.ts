import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { request, gql } from 'graphql-request';
import { ConstantsService } from '../constants.service';
import { HelpersService } from '../helpers.service';
import { TimeseriesService } from '../timeseries.service';

@Component({
  selector: 'app-eth-v1',
  templateUrl: './eth-v1.component.html',
  styleUrls: ['./eth-v1.component.css']
})
export class EthV1Component implements OnInit {

  FIRST_INDEX: number = 1622505600;
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
      this.constants.GRAPHQL_MAINNET,
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
        let assetPriceUSD: number = 0;
        let assetPrices: number[][] = [];

        if (market.underlyingSymbol === 'UNI-V2') {
          assetPrices = await this.helpers.getUniswapPairPrice(market.underlyingAddress, this.blocks, this.timestamps);
          assetPriceUSD = await this.helpers.getUniswapPairPrice(market.underlyingAddress);

          const priceObject: PriceObject = {
            address: market.underlyingAddress,
            prices: assetPrices
          };
          assetPricesUSD.push(priceObject);
        } else if (market.underlyingSymbol === 'SLP') {
          assetPrices = await this.helpers.getSushiswapPairPrice(market.underlyingAddress, this.blocks, this.timestamps);
          assetPriceUSD = await this.helpers.getSushiswapPairPrice(market.underlyingAddress);

          const priceObject: PriceObject = {
            address: market.underlyingAddress,
            prices: assetPrices
          };
          assetPricesUSD.push(priceObject);
        } else {
          let days = (this.timeseries.getLatestUTCDate() - this.FIRST_INDEX + this.constants.DAY_IN_SEC) / this.constants.DAY_IN_SEC;
          if (days < 100) {
            days = 100;
          }

          const assetPrices = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.MAINNET, days);
          const assetPriceUSD = assetPrices[assetPrices.length - 1][1];

          const priceObject: PriceObject = {
            address: market.underlyingAddress,
            prices: assetPrices
          };
          assetPricesUSD.push(priceObject);
        }

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
