import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { request, gql } from 'graphql-request';
import { ConstantsService } from '../constants.service';
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.css']
})
export class PolygonComponent implements OnInit {

  totalValueLockedUSD: BigNumber = new BigNumber(0);
  totalSupplyUSD: BigNumber = new BigNumber(0);
  totalBorrowedUSD: BigNumber = new BigNumber(0);

  constructor(
    public helpers: HelpersService,
    public constants: ConstantsService,
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
          totalBorrows
        }
      }
    `;
    request(
      this.constants.GRAPHQL_POLYGON,
      queryString
    ).then((data: QueryResult) => this.handleData(data));
  }

  handleData(data: QueryResult) {
    const markets = data.markets;

    let totalValueLockedUSD = new BigNumber(0);
    let totalValueSuppliedUSD = new BigNumber(0);
    let totalValueBorrowedUSD = new BigNumber(0);

    Promise.all(
      markets.map(async (market) => {

        // fetch the price of the underlying asset in USD
        let assetPriceUSD = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.POLYGON, 0);

        // calculate total value locked in USD
        const assetTotalValueLockedUSD = new BigNumber(market.cash).times(assetPriceUSD);
        const assetTotalValueBorrowedUSD = new BigNumber(market.totalBorrows).times(assetPriceUSD);

        // add to the total amount of total value locked USD
        totalValueLockedUSD = totalValueLockedUSD.plus(assetTotalValueLockedUSD);

        totalValueBorrowedUSD = totalValueBorrowedUSD.plus(assetTotalValueBorrowedUSD);
      })
    ).then(() => {
      this.totalValueLockedUSD = totalValueLockedUSD;

      this.totalBorrowedUSD = totalValueBorrowedUSD;
    });
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
    totalBorrows: string;
  }[];
}
