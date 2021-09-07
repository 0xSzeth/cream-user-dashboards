import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { request, gql } from 'graphql-request';
import { ConstantsService } from '../constants.service';
import { HelpersService } from '../helpers.service';
import { TimeseriesService } from '../timeseries.service';

@Component({
  selector: 'app-binance-smart-chain',
  templateUrl: './binance-smart-chain.component.html',
  styleUrls: ['./binance-smart-chain.component.css']
})
export class BinanceSmartChainComponent implements OnInit {

  FIRST_INDEX: number = 1598918400;
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
      this.constants.GRAPHQL_BSC,
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

    Promise.all(
      markets.map(async (market) => {
        const assetPriceUSD = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.BSC, 0, market.id);

        // add the price object to the assetPricesUSD array
        const priceObject: PriceObject = {
          symbol: market.underlyingSymbol,
          address: market.underlyingAddress,
          price: assetPriceUSD
        };
        assetPricesUSD.push(priceObject);

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
  symbol: string;
  address: string;
  price: number;
}
