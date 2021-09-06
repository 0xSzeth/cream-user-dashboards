import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { request, gql } from 'graphql-request';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    public constants: ConstantsService,
  ) { }

  async getTokenPriceUSD(address: string, chainID: number, days?: number): Promise<any> {
    if (address.toLowerCase() === this.constants.AAVE[chainID].toLowerCase()) {
      address = this.constants.AAVE[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ADA[chainID].toLowerCase()) {
      address = this.constants.ADA[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ALPHA[chainID].toLowerCase()) {
      address = this.constants.ALPHA[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ARMOR[chainID].toLowerCase()) {
      address = this.constants.ARMOR[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ARNXM[chainID].toLowerCase()) {
      address = this.constants.ARNXM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ATOM[chainID].toLowerCase()) {
      address = this.constants.ATOM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.AUTO[chainID].toLowerCase()) {
      address = this.constants.AUTO[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.BAND[chainID].toLowerCase()) {
      address = this.constants.BAND[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.BAT[chainID].toLowerCase()) {
      address = this.constants.BAT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.BCH[chainID].toLowerCase()) {
      address = this.constants.BCH[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.BNB[chainID].toLowerCase()) {
      address = this.constants.BNB[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.BUSD[chainID].toLowerCase()) {
      address = this.constants.BUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CAKE[chainID].toLowerCase()) {
      address = this.constants.CAKE[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CDAI[chainID].toLowerCase()) {
      address = this.constants.CDAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.COVER[chainID].toLowerCase()) {
      address = this.constants.COVER[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CREAM[chainID].toLowerCase()) {
      address = this.constants.CREAM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CRV[chainID].toLowerCase()) {
      address = this.constants.CRV[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CUSDC[chainID].toLowerCase()) {
      address = this.constants.CUSDC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CUSDT[chainID].toLowerCase()) {
      address = this.constants.CUSDT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DAI[chainID].toLowerCase()) {
      address = this.constants.DAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('DAI');
    } else if (address.toLowerCase() === this.constants.DOT[chainID].toLowerCase()) {
      address = this.constants.DOT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DPI[chainID].toLowerCase()) {
      address = this.constants.DPI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('DPI');
    } else if (address.toLowerCase() === this.constants.DUSD[chainID].toLowerCase()) {
      address = this.constants.DUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.EOS[chainID].toLowerCase()) {
      address = this.constants.EOS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.EURS[chainID].toLowerCase()) {
      address = this.constants.EURS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.EURT[chainID].toLowerCase()) {
      address = this.constants.EURT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.FIL[chainID].toLowerCase()) {
      address = this.constants.FIL[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.FRAX[chainID].toLowerCase()) {
      address = this.constants.FRAX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('FRAX');
    } else if (address.toLowerCase() === this.constants.FXS[chainID].toLowerCase()) {
      address = this.constants.FXS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.GUSD[chainID].toLowerCase()) {
      address = this.constants.GUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.HEGIC[chainID].toLowerCase()) {
      address = this.constants.HEGIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.IBAUD[chainID].toLowerCase()) {
      address = this.constants.IBAUD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBBTC[chainID].toLowerCase()) {
      address = this.constants.IBBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.IBCHF[chainID].toLowerCase()) {
      address = this.constants.IBCHF[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBEUR[chainID].toLowerCase()) {
      address = this.constants.IBEUR[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBGBP[chainID].toLowerCase()) {
      address = this.constants.IBGBP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBJPY[chainID].toLowerCase()) {
      address = this.constants.IBJPY[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBKRW[chainID].toLowerCase()) {
      address = this.constants.IBKRW[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IOTX[chainID].toLowerCase()) {
      address = this.constants.IOTX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.KP3R[chainID].toLowerCase()) {
      address = this.constants.KP3R[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.LINK[chainID].toLowerCase()) {
      address = this.constants.LINK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('LINK');
    } else if (address.toLowerCase() === this.constants.LTC[chainID].toLowerCase()) {
      address = this.constants.LTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.MUSD[chainID].toLowerCase()) {
      address = this.constants.MUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.QUICK[chainID].toLowerCase()) {
      address = this.constants.QUICK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.RENBTC[chainID].toLowerCase()) {
      address = this.constants.RENBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.RENZEC[chainID].toLowerCase()) {
      address = this.constants.RENZEC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SEUR[chainID].toLowerCase()) {
      address = this.constants.SEUR[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.SFI[chainID].toLowerCase()) {
      address = this.constants.SFI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SNX[chainID].toLowerCase()) {
      address = this.constants.SNX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('SNX');
    } else if (address.toLowerCase() === this.constants.SUSD[chainID].toLowerCase()) {
      address = this.constants.SUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('SUSD');
    } else if (address.toLowerCase() === this.constants.SUSHI[chainID].toLowerCase()) {
      address = this.constants.SUSHI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('SUSHI');
    } else if (address.toLowerCase() === this.constants.SXP[chainID].toLowerCase()) {
      address = this.constants.SXP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.TWT[chainID].toLowerCase()) {
      address = this.constants.TWT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.UNI[chainID].toLowerCase()) {
      address = this.constants.UNI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('UNI');
    } else if (address.toLowerCase() === this.constants.USDC[chainID].toLowerCase()) {
      address = this.constants.USDC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('USDC');
    } else if (address.toLowerCase() === this.constants.USDP[chainID].toLowerCase()) {
      address = this.constants.USDP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.USDT[chainID].toLowerCase()) {
      address = this.constants.USDT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('USDT');
    } else if (address.toLowerCase() === this.constants.VAI[chainID].toLowerCase()) {
      address = this.constants.VAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WBTC[chainID].toLowerCase()) {
      address = this.constants.WBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('BTC');
    } else if (address.toLowerCase() === this.constants.WBNB[chainID].toLowerCase()) {
      address = this.constants.WBNB[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WETH[chainID].toLowerCase()) {
      address = this.constants.WETH[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getETHPriceUSD();
    } else if (address.toLowerCase() === this.constants.WFTM[chainID].toLowerCase()) {
      address = this.constants.WFTM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WMATIC[chainID].toLowerCase()) {
      address = this.constants.WMATIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.XRP[chainID].toLowerCase()) {
      address = this.constants.XRP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.XTZ[chainID].toLowerCase()) {
      address = this.constants.XTZ[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.Y3CRV[chainID].toLowerCase()) {
      address = this.constants.Y3CRV[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.YFI[chainID].toLowerCase()) {
      address = this.constants.YFI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('YFI');
    } else {
      console.log("TOKEN NOT FOUND " + address);
      return 0;
    }

    return this.getOraclePriceUSD(address);
  }

  async getTokenPrice(address: string, blocks?: number[], timestamps?: number[]): Promise<any> {
    // let  price: number | number[][] = 0;
    // let queryString: string = `query TokenPrice {`;
    //
    // // fetch the current price
    // if (!blocks) {
    //   queryString += `token (
    //     id: "${address.toLowerCase()}"
    //   ) {
    //     derivedETH
    //   }`;
    // }
    //
    // // fetch historical prices based on block number
    // if (blocks && timestamps) {
    //   for (let i = 0; i < blocks.length; i++) {
    //     queryString += `t${i}: token (
    //       id: "${address.toLowerCase()}"
    //       block: {
    //         number: ${blocks[i]}
    //       }
    //     ) {
    //       derivedETH
    //     }`;
    //   }
    // }
    //
    // queryString += `}`;
    // const query = gql`${queryString}`;
    //
    // price = await request(
    //   this.constants.GRAPHQL_UNISWAP_V2,
    //   queryString
    // ).then(async (data) => {
    //   if (data.token) {
    //     const ethPriceUSD: number = await this.getETHPriceUSD();
    //     return parseFloat(data.token.derivedETH) * ethPriceUSD;
    //   } else if (blocks && timestamps) {
    //     let historicalPrices: number[][] = [];
    //     const ethPriceUSD: number[][] = await this.getETHPriceUSD(blocks, timestamps);
    //     for (let i in data) {
    //       const index = parseInt(i.substring(1));
    //       let entry: number[] = [];
    //       if (data[i] !== null) {
    //         const ethPrice = ethPriceUSD.find((x) => x[0] === timestamps[index] * 1000);
    //         entry[0] = timestamps[index] * 1000;
    //         entry[1] = parseFloat(data[i].derivedETH) * ethPrice[1];
    //       } else {
    //         entry[0] = timestamps[index] * 1000;
    //         entry[1] = 0;
    //       }
    //       historicalPrices[index] = entry;
    //     }
    //     return historicalPrices;
    //   } else {
    //     console.log(address);
    //     console.log(data);
    //     // let test = await this.getTokenPriceUSD(address, 1, 0);
    //     // console.log(test);
    //     // return test;
    //     return 0;
    //   }
    // });
    // return price;
  }

  async getForexPriceUSD(address: string): Promise<number> {
    let price: number = 0;
    let symbol: string = '';

    if (address.toLowerCase() === this.constants.IBCHF[this.constants.CHAIN_ID.MAINNET].toLowerCase()) {
      symbol = 'CHF';
    } else if (address.toLowerCase() === this.constants.IBJPY[this.constants.CHAIN_ID.MAINNET].toLowerCase()) {
      symbol = 'JPY';
    } else if (address.toLowerCase() === this.constants.IBEUR[this.constants.CHAIN_ID.MAINNET].toLowerCase() ||
      address.toLowerCase() === this.constants.EURS[this.constants.CHAIN_ID.MAINNET].toLowerCase() ||
      address.toLowerCase() === this.constants.EURT[this.constants.CHAIN_ID.MAINNET].toLowerCase() ||
      address.toLowerCase() === this.constants.SEUR[this.constants.CHAIN_ID.MAINNET].toLowerCase()
    ) {
      symbol = 'EUR';
    } else if (address.toLowerCase() === this.constants.IBGBP[this.constants.CHAIN_ID.MAINNET].toLowerCase()) {
      symbol = 'GBP';
    } else if (address.toLowerCase() === this.constants.IBAUD[this.constants.CHAIN_ID.MAINNET].toLowerCase()) {
      symbol = 'AUD';
    } else if (address.toLowerCase() === this.constants.IBKRW[this.constants.CHAIN_ID.MAINNET].toLowerCase()) {
      symbol = 'KRW';
    } else {
      console.log("Unknown Forex");
      return 0;
    }

    const apiStr = "https://api.coinbase.com/v2/exchange-rates";
    const rawResult = await this.httpsGet(apiStr, 300);
    price = 1 / parseFloat(rawResult.data.rates[symbol]);

    return price;
  }

  async getETHPriceUSD(): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);

    const chainlinkABI = require(`src/assets/abis/ChainLinkOracle.json`);

    // fetch ETH price in USD
    const chainlinkETH = require(`src/assets/json/chainlink.json`)['ETH'];
    const ethContract = new ethers.Contract(chainlinkETH, chainlinkABI, ethereum);
    const ethPrice = parseFloat(ethers.utils.formatUnits(await ethContract.latestAnswer({gasLimit: 100000}), '8'));

    return ethPrice;
  }


  // @dev uses TOKEN / ETH price feeds, which are a little different result than TOKEN / USD price feeds
  async getChainlinkPriceUSD(symbol: string): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);
    const chainlinkABI = require(`src/assets/abis/ChainLinkOracle.json`);

    // fetch token price in ETH
    const chainlinkAddress = require(`src/assets/json/chainlink.json`)[symbol];
    const oracleContract = new ethers.Contract(chainlinkAddress, chainlinkABI, ethereum);
    const tokenPrice = parseFloat(ethers.utils.formatUnits(await oracleContract.latestAnswer({gasLimit: 100000}), '18'));
    const ethPrice = await this.getETHPriceUSD();

    return tokenPrice * ethPrice;
  }

  async getOraclePriceUSD(address: string): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);

    const oracleABI = require(`src/assets/abis/CreamOracle.json`);
    const oracleAddress = this.constants.CREAM_ORACLE;
    const oracleContract = new ethers.Contract(oracleAddress, oracleABI, ethereum);

    let price = parseFloat(ethers.utils.formatUnits(await oracleContract.getPrice(address, {gasLimit: 100000}), '18'));

    if (
      address === this.constants.CDAI[this.constants.CHAIN_ID.MAINNET].toLowerCase() ||
      address === this.constants.CUSDC[this.constants.CHAIN_ID.MAINNET].toLowerCase() ||
      address === this.constants.CUSDT[this.constants.CHAIN_ID.MAINNET].toLowerCase()
    ) {
      let newPrice = price / 1e10;
      price = newPrice;
    } else if (address === this.constants.GUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase()) {
      let newPrice = price / 1e16;
      price = newPrice;
    }

    return price;
  }

  async httpsGet(apiStr: string, cacheMaxAge: number = 60) {
    const request = await fetch(apiStr, {
      headers: { 'Cache-Control': `max-age=${cacheMaxAge}` },
    });
    return await request.json();
  }

  async getUniswapPairPrice(underlyingAddress: string, blocks?: number[], timestamps?: number[]): Promise<any> {
    let pairPriceUSD: number | number[][] = 0;
    let uniswapQueryString: string = `query SushiswapPairPrice {`;

    // fetch the current price
    if (!blocks) {
      uniswapQueryString += `pair (
        id: "${underlyingAddress}"
      ) {
        reserveUSD
        totalSupply
      }`;
    }

    // fetch historical prices based on block number
    if (blocks && timestamps) {
      for (let i = 0; i < blocks.length; i++) {
        uniswapQueryString += `t${i}: pair (
          id: "${underlyingAddress}"
          block: {
            number: ${blocks[i]}
          }
        ) {
          reserveUSD
          totalSupply
        }`;
      }
    }

    uniswapQueryString += `}`;
    const uniswapQuery = gql`
      ${uniswapQueryString}
    `;

    pairPriceUSD = await request(
      this.constants.GRAPHQL_UNISWAP_V2,
      uniswapQuery
    ).then((data: PairQueryResult) => {
      if (data.pair) {
        const currentPrice = parseFloat(data.pair.reserveUSD) / parseFloat(data.pair.totalSupply);
        return currentPrice;
      } else if (blocks && timestamps) {
        let historicalPrices: number[][] = [];

        for (let i in data) {
          const index = parseInt(i.substring(1));

          let entry: number[] = [];
          if (data[i] !== null) {
            entry[0] = timestamps[index] * 1000;
            entry[1] = parseFloat(data[i].reserveUSD) / parseFloat(data[i].totalSupply);
          } else {
            entry[0] = timestamps[index] * 1000;
            entry[1] = 0;
          }

          historicalPrices[index] = entry;
        }

        return historicalPrices;
      } else {
        return 0;
      }
    });
    return pairPriceUSD;
  }

  async getSushiswapPairPrice(underlyingAddress: string, blocks?: number[], timestamps?: number[]): Promise<any> {
    let pairPriceUSD: number | number[][] = 0;
    let sushiswapQueryString: string = `query SushiswapPairPrice {`;

    // fetch the current price
    if (!blocks) {
      sushiswapQueryString += `pair (
        id: "${underlyingAddress}"
      ) {
        reserveUSD
        totalSupply
      }`;
    }

    // fetch historical prices based on block number
    if (blocks && timestamps) {
      for (let i = 0; i < blocks.length; i++) {
        sushiswapQueryString += `t${i}: pair (
          id: "${underlyingAddress}"
          block: {
            number: ${blocks[i]}
          }
        ) {
          reserveUSD
          totalSupply
        }`;
      }
    }

    sushiswapQueryString += `}`;
    const sushiswapQuery = gql`
      ${sushiswapQueryString}
    `;

    pairPriceUSD = await request(
      this.constants.GRAPHQL_SUSHISWAP,
      sushiswapQuery
    ).then((data: PairQueryResult) => {
      if (data.pair) {
        const currentPrice = parseFloat(data.pair.reserveUSD) / parseFloat(data.pair.totalSupply);
        return currentPrice;
      } else if (blocks && timestamps) {
        let historicalPrices: number[][] = [];

        for (let i in data) {
          const index = parseInt(i.substring(1));

          let entry: number[] = [];
          if (data[i] !== null) {
            entry[0] = timestamps[index] * 1000;
            entry[1] = parseFloat(data[i].reserveUSD) / parseFloat(data[i].totalSupply);
          } else {
            entry[0] = timestamps[index] * 1000;
            entry[1] = 0;
          }

          historicalPrices[index] = entry;
        }

        return historicalPrices;
      } else {
        return 0;
      }
    });
    return pairPriceUSD;
  }

}

interface PairQueryResult {
  [key: string]: any;
  pair: {
    reserveUSD: string;
    totalSupply: string;
    token0Price: string;
    token1Price: string;
  };
  pool: {
    token0Price: string;
    token1Price: string;
  };
  token: {
    derivedETH: string;
  };
}
