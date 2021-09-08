import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../helpers.service';
import { ConstantsService } from '../constants.service';
import { ethers } from 'ethers';
import { request, gql } from 'graphql-request';
import { Chart } from 'chart.js';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.css']
})
export class IceCREAMComponent implements OnInit {
  creamPriceUSD: number = 0;
  iceCreamTotalSupply: number = 0;
  creamHolders: number = 0;

  totalLoanOrigination: BigNumber = new BigNumber(0);
  totalLoanRevenue: BigNumber = new BigNumber(0);

  activeUsersMainnet: number = 0;
  activeUsersIronBank: number = 0;
  activeUsersPolygon: number = 0;
  activeUsersFantom: number = 0;
  activeUsersBSC: number = 0;

  constructor(
    public helpers: HelpersService,
    public constants: ConstantsService,
  ) { }

  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const ethereum = new ethers.providers.JsonRpcProvider(this.constants.RPC_URL[this.constants.CHAIN_ID.MAINNET]);

    this.creamPriceUSD = await this.helpers.getTokenPriceUSD(this.constants.CREAM[this.constants.CHAIN_ID.MAINNET], this.constants.CHAIN_ID.MAINNET, 0);

    // fetch total iceCREAM supply
    const iceCreamAbi = require(`src/assets/abis/iceCREAM.json`);
    const iceCreamAddress = this.constants.ICE_CREAM;
    const iceCreamContract = new ethers.Contract(iceCreamAddress, iceCreamAbi, ethereum);
    const iceCreamTotalSupply = ethers.utils.formatUnits(await iceCreamContract.supply({gasLimit: 100000}), 'ether');
    this.iceCreamTotalSupply = parseFloat(iceCreamTotalSupply);

    let creamHolders: number = 0;
    let skip: boolean = true;
    let lastID: string = "";

    while (skip) {
      let queryString = `query CreamSupplyDistribution {`;
      queryString += `creamholders (
        first: 1000,
        where: {
          creamBalance_gt: "0",
          id_gt: "${lastID}"
        },
      ) {
        id
        address
        creamBalance
      }`;
      queryString += `}`;
      const query = gql`
        ${queryString}
      `;

      let result = await request(
        this.constants.GRAPHQL_CREAM_TOKEN,
        query
      ).then((data: QueryResult) => {
        return data;
      });

      if (result.creamholders.length < 1000) {
        skip = false;
        creamHolders += result.creamholders.length;
      } else {
        lastID = result.creamholders[999].id;
        creamHolders += 1000;
      }
    }

    this.creamHolders = creamHolders;

    // fetch total active users on each chain
    this.loadMainnet();
    this.loadIronBank();
    this.loadPolygon();
    this.loadFantom();
    this.loadBSC();

  }

  async loadMainnet() {
    const ethereum = new ethers.providers.JsonRpcProvider(this.constants.RPC_URL[this.constants.CHAIN_ID.MAINNET]);
    let activeUsersMainnet: number = 0;

    let marketQueryString = `query MarketStats {`;
    marketQueryString += `markets {
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
    }`;
    marketQueryString += `}`;
    const marketQuery = gql`
      ${marketQueryString}
    `;

    request(
      this.constants.GRAPHQL_MAINNET,
      marketQuery
    ).then((data: QueryResult) => {
      const markets = data.markets;

      let totalLoanOriginationUSD = new BigNumber(0);
      let totalLoanRevenueUSD = new BigNumber(0);

      Promise.all(
        markets.map(async (market) => {
          const assetPriceUSD = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.MAINNET, 0, market.id, false);
          const assetTotalLoanOriginationUSD = new BigNumber(market.totalInterestAccumulated).times(assetPriceUSD);
          const assetTotalLoanRevenueUSD = assetTotalLoanOriginationUSD.times(market.reserveFactor).div(1e18);

          totalLoanOriginationUSD = totalLoanOriginationUSD.plus(assetTotalLoanOriginationUSD);
          totalLoanRevenueUSD = totalLoanRevenueUSD.plus(assetTotalLoanRevenueUSD);
        })
      ).then(() => {
        this.totalLoanOrigination = this.totalLoanOrigination.plus(totalLoanOriginationUSD);
        this.totalLoanRevenue = this.totalLoanRevenue.plus(totalLoanRevenueUSD);
      });
    });

    let skip: boolean = true;
    let lastID: string = "";

    while (skip) {
      let queryString = `query ActiveUsers {`;
      queryString += `accounts (
        first: 1000,
        where: {
          id_gt: "${lastID}"
        }
      ) {
          id
        }`;
      queryString += `}`;
      const query = gql`
        ${queryString}
      `;

      let result = await request(this.constants.GRAPHQL_MAINNET, query).then(
        (data: QueryResult) => {
          return data;
        });

      if (result.accounts.length < 1000) {
        skip = false;
        activeUsersMainnet += result.accounts.length;
      } else {
        lastID = result.accounts[999].id;
        activeUsersMainnet += 1000;
      }

    }

    this.activeUsersMainnet = activeUsersMainnet;
  }

  async loadIronBank() {
    const ethereum = new ethers.providers.JsonRpcProvider(this.constants.RPC_URL[this.constants.CHAIN_ID.MAINNET]);
    let activeUsersIronBank: number = 0;

    let marketQueryString = `query MarketStats {`;
    marketQueryString += `markets {
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
    }`;
    marketQueryString += `}`;
    const marketQuery = gql`
      ${marketQueryString}
    `;

    request(
      this.constants.GRAPHQL_IRONBANK,
      marketQuery
    ).then((data: QueryResult) => {
      const markets = data.markets;

      let totalLoanOriginationUSD = new BigNumber(0);
      let totalLoanRevenueUSD = new BigNumber(0);

      Promise.all(
        markets.map(async (market) => {
          const assetPriceUSD = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.MAINNET, 0, market.id, true);
          const assetTotalLoanOriginationUSD = new BigNumber(market.totalInterestAccumulated).times(assetPriceUSD);
          const assetTotalLoanRevenueUSD = assetTotalLoanOriginationUSD.times(market.reserveFactor).div(1e18);

          totalLoanOriginationUSD = totalLoanOriginationUSD.plus(assetTotalLoanOriginationUSD);
          totalLoanRevenueUSD = totalLoanRevenueUSD.plus(assetTotalLoanRevenueUSD);
        })
      ).then(() => {
        this.totalLoanOrigination = this.totalLoanOrigination.plus(totalLoanOriginationUSD);
        this.totalLoanRevenue = this.totalLoanRevenue.plus(totalLoanRevenueUSD);
      });
    });

    let skip: boolean = true;
    let lastID: string = "";

    while (skip) {
      let queryString = `query ActiveUsers {`;
      queryString += `accounts (
        first: 1000,
        where: {
          id_gt: "${lastID}"
        }
      ) {
          id
        }`;
      queryString += `}`;
      const query = gql`
        ${queryString}
      `;

      let result = await request(this.constants.GRAPHQL_IRONBANK, query).then(
        (data: QueryResult) => {
          return data;
        });

      if (result.accounts.length < 1000) {
        skip = false;
        activeUsersIronBank += result.accounts.length;
      } else {
        lastID = result.accounts[999].id;
        activeUsersIronBank += 1000;
      }

    }

    this.activeUsersIronBank = activeUsersIronBank;
  }

  async loadPolygon() {
    const ethereum = new ethers.providers.JsonRpcProvider(this.constants.RPC_URL[this.constants.CHAIN_ID.POLYGON]);
    let activeUsersPolygon: number = 0;

    let marketQueryString = `query MarketStats {`;
    marketQueryString += `markets {
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
    }`;
    marketQueryString += `}`;
    const marketQuery = gql`
      ${marketQueryString}
    `;

    request(
      this.constants.GRAPHQL_POLYGON,
      marketQuery
    ).then((data: QueryResult) => {
      const markets = data.markets;

      let totalLoanOriginationUSD = new BigNumber(0);
      let totalLoanRevenueUSD = new BigNumber(0);

      Promise.all(
        markets.map(async (market) => {
          const assetPriceUSD = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.POLYGON, 0, market.id, false);
          const assetTotalLoanOriginationUSD = new BigNumber(market.totalInterestAccumulated).times(assetPriceUSD);
          const assetTotalLoanRevenueUSD = assetTotalLoanOriginationUSD.times(market.reserveFactor).div(1e18);

          totalLoanOriginationUSD = totalLoanOriginationUSD.plus(assetTotalLoanOriginationUSD);
          totalLoanRevenueUSD = totalLoanRevenueUSD.plus(assetTotalLoanRevenueUSD);
        })
      ).then(() => {
        this.totalLoanOrigination = this.totalLoanOrigination.plus(totalLoanOriginationUSD);
        this.totalLoanRevenue = this.totalLoanRevenue.plus(totalLoanRevenueUSD);
      });
    });

    let skip: boolean = true;
    let lastID: string = "";

    while (skip) {
      let usersQueryString = `query ActiveUsers {`;
      usersQueryString += `accounts (
        first: 1000,
        where: {
          id_gt: "${lastID}"
        }
      ) {
          id
        }`;
      usersQueryString += `}`;
      const usersQuery = gql`
        ${usersQueryString}
      `;

      let result = await request(this.constants.GRAPHQL_POLYGON, usersQueryString).then(
        (data: QueryResult) => {
          return data;
        });

      if (result.accounts.length < 1000) {
        skip = false;
        activeUsersPolygon += result.accounts.length;
      } else {
        lastID = result.accounts[999].id;
        activeUsersPolygon += 1000;
      }

    }

    this.activeUsersPolygon = activeUsersPolygon;
  }

  async loadFantom() {
    const ethereum = new ethers.providers.JsonRpcProvider(this.constants.RPC_URL[this.constants.CHAIN_ID.FANTOM]);
    let activeUsersFantom: number = 0;

    let marketQueryString = `query MarketStats {`;
    marketQueryString += `markets {
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
    }`;
    marketQueryString += `}`;
    const marketQuery = gql`
      ${marketQueryString}
    `;

    request(
      this.constants.GRAPHQL_FANTOM,
      marketQuery
    ).then((data: QueryResult) => {
      const markets = data.markets;

      let totalLoanOriginationUSD = new BigNumber(0);
      let totalLoanRevenueUSD = new BigNumber(0);

      Promise.all(
        markets.map(async (market) => {
          const assetPriceUSD = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.FANTOM, 0, market.id, false);
          const assetTotalLoanOriginationUSD = new BigNumber(market.totalInterestAccumulated).times(assetPriceUSD);
          const assetTotalLoanRevenueUSD = assetTotalLoanOriginationUSD.times(market.reserveFactor).div(1e18);

          totalLoanOriginationUSD = totalLoanOriginationUSD.plus(assetTotalLoanOriginationUSD);
          totalLoanRevenueUSD = totalLoanRevenueUSD.plus(assetTotalLoanRevenueUSD);
        })
      ).then(() => {
        this.totalLoanOrigination = this.totalLoanOrigination.plus(totalLoanOriginationUSD);
        this.totalLoanRevenue = this.totalLoanRevenue.plus(totalLoanRevenueUSD);
      });
    });

    let skip: boolean = true;
    let lastID: string = "";

    while (skip) {
      let queryString = `query ActiveUsers {`;
      queryString += `accounts (
        first: 1000,
        where: {
          id_gt: "${lastID}"
        }
      ) {
          id
        }`;
      queryString += `}`;
      const query = gql`
        ${queryString}
      `;

      let result = await request(this.constants.GRAPHQL_FANTOM, query).then(
        (data: QueryResult) => {
          return data;
        });

      if (result.accounts.length < 1000) {
        skip = false;
        activeUsersFantom += result.accounts.length;
      } else {
        lastID = result.accounts[999].id;
        activeUsersFantom += 1000;
      }

    }

    this.activeUsersFantom = activeUsersFantom;
  }

  async loadBSC() {
    const ethereum = new ethers.providers.JsonRpcProvider(this.constants.RPC_URL[this.constants.CHAIN_ID.BSC]);
    let activeUsersBSC: number = 0;

    let marketQueryString = `query MarketStats {`;
    marketQueryString += `markets {
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
    }`;
    marketQueryString += `}`;
    const marketQuery = gql`
      ${marketQueryString}
    `;

    request(
      this.constants.GRAPHQL_BSC,
      marketQuery
    ).then((data: QueryResult) => {
      const markets = data.markets;

      let totalLoanOriginationUSD = new BigNumber(0);
      let totalLoanRevenueUSD = new BigNumber(0);

      Promise.all(
        markets.map(async (market) => {
          const assetPriceUSD = await this.helpers.getTokenPriceUSD(market.underlyingAddress, this.constants.CHAIN_ID.BSC, 0, market.id, false);
          const assetTotalLoanOriginationUSD = new BigNumber(market.totalInterestAccumulated).times(assetPriceUSD);
          const assetTotalLoanRevenueUSD = assetTotalLoanOriginationUSD.times(market.reserveFactor).div(1e18);

          totalLoanOriginationUSD = totalLoanOriginationUSD.plus(assetTotalLoanOriginationUSD);
          totalLoanRevenueUSD = totalLoanRevenueUSD.plus(assetTotalLoanRevenueUSD);
        })
      ).then(() => {
        this.totalLoanOrigination = this.totalLoanOrigination.plus(totalLoanOriginationUSD);
        this.totalLoanRevenue = this.totalLoanRevenue.plus(totalLoanRevenueUSD);
      });
    });

    let skip: boolean = true;
    let lastID: string = "";

    while (skip) {
      let queryString = `query ActiveUsers {`;
      queryString += `accounts (
        first: 1000,
        where: {
          id_gt: "${lastID}"
        }
      ) {
          id
        }`;
      queryString += `}`;
      const query = gql`
        ${queryString}
      `;

      let result = await request(this.constants.GRAPHQL_BSC, query).then(
        (data: QueryResult) => {
          return data;
        });

      if (result.accounts.length < 1000) {
        skip = false;
        activeUsersBSC += result.accounts.length;
      } else {
        lastID = result.accounts[999].id;
        activeUsersBSC += 1000;
      }

    }

    this.activeUsersBSC = activeUsersBSC;
  }

  numberWithCommas(x: number | BigNumber) {
    let y = x.toFixed(2);
    let number = y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return number;
  }
}

interface QueryResult {
  accounts: {
    id: string;
  }[];
  creamholders: {
    id: string;
    address: string;
    creamBalance: string;
  }[];
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
