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

  async getTokenPriceUSD(address: string, chainID: number, days?: number, id?: string): Promise<any> {
    if (address.toLowerCase() === this.constants.ONEINCH[chainID].toLowerCase()) {
      // address = this.constants.1INCH[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('1INCH', chainID);
    } else if (address.toLowerCase() === this.constants.AAVE[chainID].toLowerCase()) {
      // address = this.constants.AAVE[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('AAVE', chainID);
    } else if (address.toLowerCase() === this.constants.ADA[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('ADA');
      }
    } else if (address.toLowerCase() === this.constants.AKRO[chainID].toLowerCase()) {
      // address = this.constants.ADA[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('AKRO', chainID);
    } else if (address.toLowerCase() === this.constants.ALPHA[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('ALPHA');
      }
    } else if (address.toLowerCase() === this.constants.AMP[chainID].toLowerCase()) {
      // address = this.constants.ALPHA[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('AMP', chainID);
    } else if (address.toLowerCase() === this.constants.ARMOR[chainID].toLowerCase()) {
      // address = this.constants.ARMOR[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ARNXM[chainID].toLowerCase()) {
      // address = this.constants.ARNXM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.ATOM[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('ATOM');
      }
    } else if (address.toLowerCase() === this.constants.AUTO[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('AUTO');
      }
    } else if (address.toLowerCase() === this.constants.BAL[chainID].toLowerCase()) {
      // address = this.constants.BAL[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('BAL', chainID);
    } else if (address.toLowerCase() === this.constants.BAND[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BAND');
      }
    } else if (address.toLowerCase() === this.constants.BAT[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BAT');
      }
    } else if (address.toLowerCase() === this.constants.BBTC[chainID].toLowerCase()) {
      // address = this.constants.BAT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('BTC', chainID);
    } else if (address.toLowerCase() === this.constants.BCH[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BCH');
      }
    } else if (address.toLowerCase() === this.constants.BETH[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BETH');
      }
    } else if (address.toLowerCase() === this.constants.BNB[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BNB');
      }
    } else if (address.toLowerCase() === this.constants.BNT[chainID].toLowerCase()) {
      // address = this.constants.BNB[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('BNT', chainID);
    } else if (address.toLowerCase() === this.constants.BUSD[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BUSD');
      }
      return await this.getChainlinkPriceUSD('BUSD', chainID);
    } else if (address.toLowerCase() === this.constants.CAKE[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('CAKE');
      }
    } else if (address.toLowerCase() === this.constants.CDAI[chainID].toLowerCase()) {
      // address = this.constants.CDAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CEL[chainID].toLowerCase()) {
      // address = this.constants.CEL[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('CEL', chainID);
    } else if (address.toLowerCase() === this.constants.COMP[chainID].toLowerCase()) {
      // address = this.constants.COMP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('COMP', chainID);
    } else if (address.toLowerCase() === this.constants.COVER[chainID].toLowerCase()) {
      // address = this.constants.COVER[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('COVER', chainID);
    } else if (address.toLowerCase() === this.constants.CREAM[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('CREAM');
      }
      return await this.getChainlinkPriceUSD('CREAM', chainID);
    } else if (address.toLowerCase() === this.constants.CRV[chainID].toLowerCase()) {
      return await this.getChainlinkPriceUSD('CRV', chainID);
      // address = this.constants.CRV[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CUSDC[chainID].toLowerCase()) {
      // address = this.constants.CUSDC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.CUSDT[chainID].toLowerCase()) {
      // address = this.constants.CUSDT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.DAI[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('DAI');
      }
      return await this.getChainlinkPriceUSD('DAI', chainID);
    } else if (address.toLowerCase() === this.constants.DOT[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('DOT');
      }
    } else if (address.toLowerCase() === this.constants.DPI[chainID].toLowerCase()) {
      // address = this.constants.DPI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('DPI', chainID);
    } else if (address.toLowerCase() === this.constants.DUSD[chainID].toLowerCase()) {
      // address = this.constants.DUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.EOS[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('EOS');
      }
    } else if (address.toLowerCase() === this.constants.EURS[chainID].toLowerCase()) {
      // address = this.constants.EURS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('EUR', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.EURT[chainID].toLowerCase()) {
      // address = this.constants.EURT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('EUR', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.FEI[chainID].toLowerCase()) {
      // address = this.constants.EURT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('FEI', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.FIL[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('FIL');
      }
    } else if (address.toLowerCase() === this.constants.FRAX[chainID].toLowerCase()) {
      // address = this.constants.FRAX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('FRAX', chainID);
    } else if (address.toLowerCase() === this.constants.FTT[chainID].toLowerCase()) {
      // address = this.constants.FTT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('FTT', chainID);
    } else if (address.toLowerCase() === this.constants.FXS[chainID].toLowerCase()) {
      return await this.getChainlinkPriceUSD('FXS', chainID);
      // address = this.constants.FXS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.GNO[chainID].toLowerCase()) {
      return await this.getChainlinkPriceUSD('GNO', chainID);
      // address = this.constants.FXS[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.GUSD[chainID].toLowerCase()) {
      // address = this.constants.GUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.HBTC[chainID].toLowerCase()) {
      // address = this.constants.HEGIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('BTC', chainID);
    } else if (address.toLowerCase() === this.constants.HEGIC[chainID].toLowerCase()) {
      // address = this.constants.HEGIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('HEGIC', chainID);
    } else if (address.toLowerCase() === this.constants.HUSD[chainID].toLowerCase()) {
      // address = this.constants.HEGIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('HUSD', chainID);
    } else if (address.toLowerCase() === this.constants.IBAUD[chainID].toLowerCase()) {
      // address = this.constants.IBAUD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('AUD', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBBTC[chainID].toLowerCase()) {
      // address = this.constants.IBBTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('BTC', chainID);
    } else if (address.toLowerCase() === this.constants.IBCHF[chainID].toLowerCase()) {
      // address = this.constants.IBCHF[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('CHF', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBEUR[chainID].toLowerCase()) {
      // address = this.constants.IBEUR[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('EUR', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBGBP[chainID].toLowerCase()) {
      // address = this.constants.IBGBP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('GBP', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBJPY[chainID].toLowerCase()) {
      // address = this.constants.IBJPY[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('JPY', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IBKRW[chainID].toLowerCase()) {
      // address = this.constants.IBKRW[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('KRW', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.IOTX[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('IOTX');
      }
    } else if (address.toLowerCase() === this.constants.KP3R[chainID].toLowerCase()) {
      // address = this.constants.KP3R[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('KP3R', chainID);
    } else if (address.toLowerCase() === this.constants.LINK[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('LINK');
      }
      return await this.getChainlinkPriceUSD('LINK', chainID);
    } else if (address.toLowerCase() === this.constants.LON[chainID].toLowerCase()) {
      return await this.getChainlinkPriceUSD('LON', chainID);
    } else if (address.toLowerCase() === this.constants.LTC[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('LTC');
      }
    } else if (address.toLowerCase() === this.constants.MLN[chainID].toLowerCase()) {
      // address = this.constants.LTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('MLN', chainID);
    } else if (address.toLowerCase() === this.constants.MTA[chainID].toLowerCase()) {
      // address = this.constants.LTC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('MTA', chainID);
    } else if (address.toLowerCase() === this.constants.MUSD[chainID].toLowerCase()) {
      // address = this.constants.MUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.OCEAN[chainID].toLowerCase()) {
      // address = this.constants.MUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('OCEAN', chainID);
    } else if (address.toLowerCase() === this.constants.OMG[chainID].toLowerCase()) {
      // address = this.constants.MUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('OMG', chainID);
    } else if (address.toLowerCase() === this.constants.PAX[chainID].toLowerCase()) {
      // address = this.constants.MUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('PAX', chainID);
    } else if (address.toLowerCase() === this.constants.PAXG[chainID].toLowerCase()) {
      // address = this.constants.MUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('PAXG', chainID);
    } else if (address.toLowerCase() === this.constants.QUICK[chainID].toLowerCase()) {
      // address = this.constants.QUICK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.RAI[chainID].toLowerCase()) {
      // address = this.constants.QUICK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('RAI', chainID);
    } else if (address.toLowerCase() === this.constants.RARI[chainID].toLowerCase()) {
      // address = this.constants.QUICK[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('RARI', chainID);
    } else if (address.toLowerCase() === this.constants.RENBTC[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('RENBTC');
      }
      return await this.getChainlinkPriceUSD('BTC', chainID);
    } else if (address.toLowerCase() === this.constants.RENZEC[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('ZEC');
      }
    } else if (address.toLowerCase() === this.constants.RUNE[chainID].toLowerCase()) {
      // address = this.constants.RENZEC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('RUNE', chainID);
    } else if (address.toLowerCase() === this.constants.PERP[chainID].toLowerCase()) {
      // address = this.constants.RENZEC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('PERP', chainID);
    } else if (address.toLowerCase() === this.constants.SEUR[chainID].toLowerCase()) {
      // address = this.constants.SEUR[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('EUR', chainID);
      // return await this.getForexPriceUSD(address);
    } else if (address.toLowerCase() === this.constants.SFI[chainID].toLowerCase()) {
      // address = this.constants.SFI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('SFI', chainID);
    } else if (address.toLowerCase() === this.constants.SNX[chainID].toLowerCase()) {
      // address = this.constants.SNX[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('SNX', chainID);
    } else if (address.toLowerCase() === this.constants.SRM[chainID].toLowerCase()) {
      // address = this.constants.SUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('SRM', chainID);
    } else if (address.toLowerCase() === this.constants.SUSD[chainID].toLowerCase()) {
      // address = this.constants.SUSD[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('SUSD', chainID);
    } else if (address.toLowerCase() === this.constants.SUSHI[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('SUSHI');
      }
      return await this.getChainlinkPriceUSD('SUSHI', chainID);
    } else if (address.toLowerCase() === this.constants.SXP[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('SXP');
      }
    } else if (address.toLowerCase() === this.constants.TWT[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('TWT');
      }
    } else if (address.toLowerCase() === this.constants.UNI[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('UNI');
      }
      return await this.getChainlinkPriceUSD('UNI', chainID);
    } else if (address.toLowerCase() === this.constants.USDC[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('USDC');
      }
      return await this.getChainlinkPriceUSD('USDC', chainID);
    } else if (address.toLowerCase() === this.constants.USDP[chainID].toLowerCase()) {
      // address = this.constants.USDP[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.USDT[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('USDT');
      }
      return await this.getChainlinkPriceUSD('USDT', chainID);
    } else if (address.toLowerCase() === this.constants.UST[chainID].toLowerCase()) {
      // address = this.constants.USDT[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('UST', chainID);
    } else if (address.toLowerCase() === this.constants.VAI[chainID].toLowerCase()) {
      // address = this.constants.VAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      // return 0;
    } else if (address.toLowerCase() === this.constants.VSP[chainID].toLowerCase()) {
      // address = this.constants.VAI[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('VSP', chainID);
    } else if (address.toLowerCase() === this.constants.WBTC[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BTCB');
      }
      return await this.getChainlinkPriceUSD('BTC', chainID);
    } else if (address.toLowerCase() === this.constants.WBNB[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BNB');
      }
    } else if (address.toLowerCase() === this.constants.WETH[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('ETH');
      }
      return await this.getChainlinkPriceUSD('ETH', chainID);
    } else if (address.toLowerCase() === this.constants.WFTM[chainID].toLowerCase()) {
      // address = this.constants.WFTM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('FTM', chainID);
    } else if (address.toLowerCase() === this.constants.WMATIC[chainID].toLowerCase()) {
      // address = this.constants.WMATIC[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('MATIC', chainID);
    } else if (address.toLowerCase() === this.constants.WNXM[chainID].toLowerCase()) {
      // address = this.constants.WNXM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('WNXM', chainID);
    } else if (address.toLowerCase() === this.constants.WOO[chainID].toLowerCase()) {
      // address = this.constants.WNXM[this.constants.CHAIN_ID.MAINNET].toLowerCase();
      return await this.getChainlinkPriceUSD('WOO', chainID);
    } else if (address.toLowerCase() === this.constants.XRP[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('XRP');
      }
    } else if (address.toLowerCase() === this.constants.XTZ[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('XTZ');
      }
    } else if (address.toLowerCase() === this.constants.XVS[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('XVS');
      }
    } else if (address.toLowerCase() === this.constants.Y3CRV[chainID].toLowerCase()) {
      // address = this.constants.Y3CRV[this.constants.CHAIN_ID.MAINNET].toLowerCase();
    } else if (address.toLowerCase() === this.constants.YFI[chainID].toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('YFI');
      }
      return await this.getChainlinkPriceUSD('YFI', chainID);
    } else if (address.toLowerCase() === this.constants.UNI_DAI_ETH[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.UNI_USDC_ETH[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.UNI_USDT_ETH[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.UNI_WBTC_ETH[chainID].toLowerCase()) {
      // return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.SUSHI_DAI_ETH[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.SUSHI_USDC_ETH[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.SUSHI_USDT_ETH[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.SUSHI_SUSHI_ETH[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.SUSHI_YFI_ETH[chainID].toLowerCase()) {
      // return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.SUSHI_WBTC_ETH[chainID].toLowerCase()) {
      // return await this.getFairUniswapPriceUSD(address, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_ETH_BNB_V1[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_ETH_BNB_V2[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_CAKE_BNB_V1[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_CAKE_BNB_V2[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_BTCB_BNB_V1[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_BTCB_BNB_V2[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_BUSD_BNB_V1[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_BUSD_BNB_V2[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_USDT_BUSD_V1[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.CAKE_USDT_BUSD_V2[chainID].toLowerCase()) {
      return await this.getFairUniswapPriceUSD(id, chainID);
    } else if (address.toLowerCase() === this.constants.ZERO_ADDRESS.toLowerCase()) {
      if (chainID === this.constants.CHAIN_ID.BSC) {
        return await this.getBandPriceUSD('BNB');
      }
      return await this.getChainlinkPriceUSD('ETH', chainID);
    } else {
      console.log("TOKEN NOT FOUND " + address.toLowerCase());
      return 0;
    }
    // return 0;
    return this.getOraclePriceUSD(address.toLowerCase(), chainID);
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

  async getETHPriceUSD(chainID: number): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);

    const chainlinkABI = require(`src/assets/abis/ChainLinkOracle.json`);

    // fetch ETH price in USD
    const chainlinkETH = require(`src/assets/json/chainlink.json`)[chainID]['ETH']['USD'];
    const ethContract = new ethers.Contract(chainlinkETH, chainlinkABI, ethereum);
    const ethPrice = parseFloat(ethers.utils.formatUnits(await ethContract.latestAnswer({gasLimit: 100000}), '8'));

    return ethPrice;
  }

  async getChainlinkPriceUSD(symbol: string, chainID?: number): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);
    const chainlinkABI = require(`src/assets/abis/ChainLinkOracle.json`);

    let chainlinkAddress = require(`src/assets/json/chainlink.json`)[chainID][symbol]['USD'];

    // if no TOKEN / USD price feed
    if (chainlinkAddress === "") {
      const ethPriceUSD = await this.getETHPriceUSD(chainID);

      chainlinkAddress = require(`src/assets/json/chainlink.json`)[chainID][symbol]['ETH'];

      const oracleContract = new ethers.Contract(chainlinkAddress, chainlinkABI, ethereum);
      const tokenPrice = parseFloat(ethers.utils.formatUnits(await oracleContract.latestAnswer({gasLimit: 100000}), '18'));
      return tokenPrice * ethPriceUSD;
    } else {
      const oracleContract = new ethers.Contract(chainlinkAddress, chainlinkABI, ethereum);
      const tokenPrice = parseFloat(ethers.utils.formatUnits(await oracleContract.latestAnswer({gasLimit: 100000}), '8'));
      return tokenPrice;
    }
  }

  async getBandPriceUSD(symbol: string): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);

    const bandABI = require(`src/assets/abis/BandOracle.json`);
    const bandAddress = "0xDA7a001b254CD22e46d3eAB04d937489c93174C3";
    const oracleContract = new ethers.Contract(bandAddress, bandABI, ethereum);

    const tokenPrice = parseFloat(await oracleContract.getReferenceData(symbol, 'USD', {gasLimit: 100000})) / 1e18;
    return tokenPrice;
  }

  async getOraclePriceUSD(address: string, chainID?: number, ironBank?: boolean): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);

    const oracleABI = require(`src/assets/abis/CreamOracle.json`);
    const oracleAddress = this.constants.CREAM_ORACLE[chainID];
    const oracleContract = new ethers.Contract(oracleAddress, oracleABI, ethereum);

    let basePriceUSD = 1;
    if (chainID === this.constants.CHAIN_ID.BSC) {
      basePriceUSD = await this.getBandPriceUSD('BNB');
    }

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

    return price * basePriceUSD;
  }

  // @notice address = crToken address
  async getFairUniswapPriceUSD(address: string, chainID: number): Promise<number> {
    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);

    const oracleABI = require(`src/assets/abis/CreamOracleProxy.json`);
    const oracleAddress = this.constants.CREAM_ORACLE_PROXY[chainID];
    const oracleContract = new ethers.Contract(oracleAddress, oracleABI, ethereum);
    console.log(oracleContract);

    const price = parseFloat(await oracleContract.getUnderlyingPrice(address, {gasLimit: 100000})) / 1e18;
    let basePriceUSD;
    if (chainID === this.constants.CHAIN_ID.BSC) {
      basePriceUSD = await this.getBandPriceUSD('BNB');
    } else {
      basePriceUSD = await this.getETHPriceUSD(chainID);
    }

    return price * basePriceUSD;
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
