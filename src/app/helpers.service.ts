import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { request, gql } from 'graphql-request';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    public constants: ConstantsService,
  ) { }

  async getTokenPriceUSD(address: string, chainID: number, days: number): Promise<any> {
    if (address.toLowerCase() === this.constants.AAVE[chainID].toLowerCase()) {
      address = this.constants.AAVE[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ADA[chainID].toLowerCase()) {
      address = this.constants.ADA[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ALPHA[chainID].toLowerCase()) {
      address = this.constants.ALPHA[this.constants.CHAIN_ID.MAINNET].toLowerCase();
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
    } else if (address.toLowerCase() === this.constants.BUSD[chainID].toLowerCase()) {
      address = this.constants.BUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CAKE[chainID].toLowerCase()) {
      address = this.constants.CAKE[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.COVER[chainID].toLowerCase()) {
      address = this.constants.COVER[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CREAM[chainID].toLowerCase()) {
      address = this.constants.CREAM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CRV[chainID].toLowerCase()) {
      address = this.constants.CRV[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DAI[chainID].toLowerCase()) {
      address = this.constants.DAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DOT[chainID].toLowerCase()) {
      address = this.constants.DOT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DPI[chainID].toLowerCase()) {
      address = this.constants.DPI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.EOS[chainID].toLowerCase()) {
      address = this.constants.EOS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.FIL[chainID].toLowerCase()) {
      address = this.constants.FIL[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.FRAX[chainID].toLowerCase()) {
      address = this.constants.FRAX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.FXS[chainID].toLowerCase()) {
      address = this.constants.FXS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.HEGIC[chainID].toLowerCase()) {
      address = this.constants.HEGIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.IBBTC[chainID].toLowerCase()) {
      address = this.constants.IBBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.IOTX[chainID].toLowerCase()) {
      address = this.constants.IOTX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.KP3R[chainID].toLowerCase()) {
      address = this.constants.KP3R[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.LINK[chainID].toLowerCase()) {
      address = this.constants.LINK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.LTC[chainID].toLowerCase()) {
      address = this.constants.LTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.QUICK[chainID].toLowerCase()) {
      address = this.constants.QUICK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.RENBTC[chainID].toLowerCase()) {
      address = this.constants.RENBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.RENZEC[chainID].toLowerCase()) {
      address = this.constants.RENZEC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SFI[chainID].toLowerCase()) {
      address = this.constants.SFI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SNX[chainID].toLowerCase()) {
      address = this.constants.SNX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SUSD[chainID].toLowerCase()) {
      address = this.constants.SUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SUSHI[chainID].toLowerCase()) {
      address = this.constants.SUSHI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SXP[chainID].toLowerCase()) {
      address = this.constants.SXP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.TWT[chainID].toLowerCase()) {
      address = this.constants.TWT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.UNI[chainID].toLowerCase()) {
      address = this.constants.UNI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.USDC[chainID].toLowerCase()) {
      address = this.constants.USDC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.USDT[chainID].toLowerCase()) {
      address = this.constants.USDT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.VAI[chainID].toLowerCase()) {
      address = this.constants.VAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WBTC[chainID].toLowerCase()) {
      address = this.constants.WBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WBNB[chainID].toLowerCase()) {
      address = this.constants.WBNB[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WETH[chainID].toLowerCase()) {
      address = this.constants.WETH[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WFTM[chainID].toLowerCase()) {
      address = this.constants.WFTM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WMATIC[chainID].toLowerCase()) {
      address = this.constants.WMATIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.XRP[chainID].toLowerCase()) {
      address = this.constants.XRP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.XTZ[chainID].toLowerCase()) {
      address = this.constants.XTZ[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.YFI[chainID].toLowerCase()) {
      address = this.constants.YFI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    }

    const apiStr = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}/market_chart/?vs_currency=usd&days=${days}`;
    const rawResult = await this.httpsGet(apiStr, 300);
    return days === 0 ? rawResult.prices[0][1] : rawResult.prices;
  }

  // 1inch
  // async getTokenPriceUSD2(from: string, to: string, amount: number): Promise<number> {
  //   //const apiStr = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}/market_chart/?vs_currency=usd&days=0`;
  //   const apiStr = `https://api.1inch.exchange/v3.0/1/quote?fromTokenAddress=${from}&toTokenAddress=${to}&amount=${amount}`;
  //   const rawResult = await this.httpsGet(apiStr, 300);
  //   if (rawResult.error) {
  //     console.log("here's an error!!!!!!!!")
  //     return 0;
  //   } else {
  //     console.log(rawResult);
  //     return rawResult.prices[0][1];
  //   }
  // }

  async httpsGet(apiStr: string, cacheMaxAge: number = 60) {
    const request = await fetch(apiStr, {
      headers: { 'Cache-Control': `max-age=${cacheMaxAge}` },
    });
    return await request.json();
  }

  // token needs to have 'UNI-V2' in name
  // works for current price, need to implement historical prices
  async getUniswapPairPrice(underlyingAddress: string): Promise<number> {
    let pairPriceUSD: number = 0;
    const uniswapQueryString = gql`
      {
        pair (
          id: "${underlyingAddress}"
        ) {
          reserveUSD
          totalSupply
        }
      }
    `;
    pairPriceUSD = await request(
      this.constants.GRAPHQL_UNISWAP_V2,
      uniswapQueryString
    ).then((data: PairQueryResult) => {
      const result = parseFloat(data.pair.reserveUSD) / parseFloat(data.pair.totalSupply);
      return result;
    });
    return pairPriceUSD;
  }

  // token needs to have 'SLP' in name
  // works for current price, need to implement historical prices
  async getSushiswapPairPrice(underlyingAddress: string): Promise<number> {
    let pairPriceUSD: number = 0;
    const sushiswapQueryString = gql`
      {
        pair (
          id: "${underlyingAddress}"
        ) {
          reserveUSD
          totalSupply
        }
      }
    `;
    pairPriceUSD = await request(
      this.constants.GRAPHQL_SUSHISWAP,
      sushiswapQueryString
    ).then((data: PairQueryResult) => {
      const result = parseFloat(data.pair.reserveUSD) / parseFloat(data.pair.totalSupply);
      return result;
    });
    return pairPriceUSD;
  }

}

interface PairQueryResult {
  pair: {
    reserveUSD: string;
    totalSupply: string;
  };
}
