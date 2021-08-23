import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  async getTokenPriceUSD(address: string): Promise<number> {
    const apiStr = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}/market_chart/?vs_currency=usd&days=0`;
    const rawResult = await this.httpsGet(apiStr, 300);
    return rawResult.prices[0][1];
  }

  async getHistoricalTokenPriceUSD(address: string, days: string): Promise<Array<any>> {
    const apiStr = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}/market_chart/?vs_currency=usd&days=${days}`;
    const rawResult = await this.httpsGet(apiStr, 300);
    return rawResult.prices;
  }

  async httpsGet(apiStr: string, cacheMaxAge: number = 60) {
    const request = await fetch(apiStr, {
      headers: { 'Cache-Control': `max-age=${cacheMaxAge}` },
    });
    return await request.json();
  }


}
