import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  // NETWORK INFO //
  CHAIN_ID = {
    MAINNET: 1,
    POLYGON: 137,
    FANTOM: 250,
    BSC: 56
  };

  // tokens
  ICE_CREAM = "0x3986425b96F11972d31C78ff340908832C5c0043";
  ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

  AAVE = {
    [this.CHAIN_ID.MAINNET]: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    [this.CHAIN_ID.POLYGON]: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  CREAM = {
    [this.CHAIN_ID.MAINNET]: "0x2ba592f78db6436527729929aaf6c908497cb200",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  CRV = {
    [this.CHAIN_ID.MAINNET]: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    [this.CHAIN_ID.POLYGON]: "0x172370d5cd63279efa6d502dab29171933a610af",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  DAI = {
    [this.CHAIN_ID.MAINNET]: "0x6b175474e89094c44da98b954eedeac495271d0f",
    [this.CHAIN_ID.POLYGON]: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  DPI = {
    [this.CHAIN_ID.MAINNET]: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
    [this.CHAIN_ID.POLYGON]: "0x85955046df4668e1dd369d2de9f3aeb98dd2a369",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  FXS = {
    [this.CHAIN_ID.MAINNET]: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    [this.CHAIN_ID.POLYGON]: "0x3e121107f6f22da4911079845a470757af4e1a1b",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBBTC = {
    [this.CHAIN_ID.MAINNET]: "0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f",
    [this.CHAIN_ID.POLYGON]: "0x4eac4c4e9050464067d673102f8e24b2fcceb350", // @dev check this
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  LINK = {
    [this.CHAIN_ID.MAINNET]: "0x514910771af9ca656af840dff83e8264ecf986ca",
    [this.CHAIN_ID.POLYGON]: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  QUICK = {
    [this.CHAIN_ID.MAINNET]: "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
    [this.CHAIN_ID.POLYGON]: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SNX = {
    [this.CHAIN_ID.MAINNET]: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    [this.CHAIN_ID.POLYGON]: "0x50b728d8d964fd00c2d0aad81718b71311fef68a",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SUSHI = {
    [this.CHAIN_ID.MAINNET]: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    [this.CHAIN_ID.POLYGON]: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  UNI = {
    [this.CHAIN_ID.MAINNET]: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    [this.CHAIN_ID.POLYGON]: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  USDC = {
    [this.CHAIN_ID.MAINNET]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    [this.CHAIN_ID.POLYGON]: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  USDT = {
    [this.CHAIN_ID.MAINNET]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    [this.CHAIN_ID.POLYGON]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  WBTC = {
    [this.CHAIN_ID.MAINNET]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    [this.CHAIN_ID.POLYGON]: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  WETH = {
    [this.CHAIN_ID.MAINNET]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    [this.CHAIN_ID.POLYGON]: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  WMATIC = {
    [this.CHAIN_ID.MAINNET]: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    [this.CHAIN_ID.POLYGON]: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };

  // subgraph endpoints
  GRAPHQL_MAINNET = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-mainnet";
  GRAPHQL_IRONBANK = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-ironbank";
  GRAPHQL_POLYGON = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-polygon";
  GRAPHQL_FANTOM = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-fantom";
  GRAPHQL_BSC = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-bsc";
  GRAPHQL_CREAM_TOKEN = "https://api.thegraph.com/subgraphs/name/0xszeth/cream-token";

  GRAPHQL_UNISWAP_V2 = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';
  GRAPHQL_UNISWAP_V3 = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
  GRAPHQL_SUSHISWAP = 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange';

  GRAPHQL_BLOCKS = {
    [this.CHAIN_ID.MAINNET]: "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",
    [this.CHAIN_ID.POLYGON]: "https://api.thegraph.com/subgraphs/name/elkfinance/matic-blocks",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };


  // utils
  PRECISION = 1e18;
}
