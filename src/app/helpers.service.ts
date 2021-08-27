import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

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
    } else if (address.toLowerCase() === this.constants.CREAM[chainID].toLowerCase()) {
      address = this.constants.CREAM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CRV[chainID].toLowerCase()) {
      address = this.constants.CRV[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DAI[chainID].toLowerCase()) {
      address = this.constants.DAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DPI[chainID].toLowerCase()) {
      address = this.constants.DPI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.FXS[chainID].toLowerCase()) {
      address = this.constants.FXS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.IBBTC[chainID].toLowerCase()) {
      address = this.constants.IBBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.LINK[chainID].toLowerCase()) {
      address = this.constants.LINK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.QUICK[chainID].toLowerCase()) {
      address = this.constants.QUICK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SNX[chainID].toLowerCase()) {
      address = this.constants.SNX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.SUSHI[chainID].toLowerCase()) {
      address = this.constants.SUSHI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.UNI[chainID].toLowerCase()) {
      address = this.constants.UNI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.USDC[chainID].toLowerCase()) {
      address = this.constants.USDC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.USDT[chainID].toLowerCase()) {
      address = this.constants.USDT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WBTC[chainID].toLowerCase()) {
      address = this.constants.WBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WETH[chainID].toLowerCase()) {
      address = this.constants.WETH[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.WMATIC[chainID].toLowerCase()) {
      address = this.constants.WMATIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    }

    const apiStr = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}/market_chart/?vs_currency=usd&days=${days}`;
    const rawResult = await this.httpsGet(apiStr, 300);
    return days === 0 ? rawResult.prices[0][1] : rawResult.prices;
  }

  // 1inch
  async getTokenPriceUSD2(from: string, to: string, amount: number): Promise<number> {
    //const apiStr = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}/market_chart/?vs_currency=usd&days=0`;
    const apiStr = `https://api.1inch.exchange/v3.0/1/quote?fromTokenAddress=${from}&toTokenAddress=${to}&amount=${amount}`;
    const rawResult = await this.httpsGet(apiStr, 300);
    if (rawResult.error) {
      console.log("here's an error!!!!!!!!")
      return 0;
    } else {
      console.log(rawResult);
      return rawResult.prices[0][1];
    }


  }

  async httpsGet(apiStr: string, cacheMaxAge: number = 3) {
    const request = await fetch(apiStr, {
      headers: { 'Cache-Control': `max-age=${cacheMaxAge}` },
    });
    return await request.json();
  }


}
