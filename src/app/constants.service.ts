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
    [this.CHAIN_ID.FANTOM]: "0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
    [this.CHAIN_ID.BSC]: "0xfb6115445bff7b52feb98650c87f44907e58f802"
  };
  ADA = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47"
  };
  ALPHA = {
    [this.CHAIN_ID.MAINNET]: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0xa1faa113cbe53436df28ff0aee54275c13b40975"
  };
  ATOM = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x0eb3a705fc54725037cc9e008bdede697f62f335"
  };
  AUTO = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0xa184088a740c695e156f91f5cc086a06bb78b827"
  };
  BAND = {
    [this.CHAIN_ID.MAINNET]: "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    [this.CHAIN_ID.POLYGON]: "0xa8b1e0764f85f53dfe21760e8afe5446d82606ac",
    [this.CHAIN_ID.FANTOM]: "0x46e7628e8b4350b2716ab470ee0ba1fa9e76c6c5",
    [this.CHAIN_ID.BSC]: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18"
  };
  BAT = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x101d82428437127bf1608f699cd651e6abf9766e"
  };
  BCH = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf"
  };
  BNB = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  BUSD = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
  };
  CAKE = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
  };
  COVER = {
    [this.CHAIN_ID.MAINNET]: "0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "0xB01E8419d842beebf1b70A7b5f7142abbaf7159D",
    [this.CHAIN_ID.BSC]: ""
  };
  CREAM = {
    [this.CHAIN_ID.MAINNET]: "0x2ba592f78db6436527729929aaf6c908497cb200",
    [this.CHAIN_ID.POLYGON]: "0x8b407562b34eb832834eb57c7e1cf7e3bf45b0d9",
    [this.CHAIN_ID.FANTOM]: "0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6",
    [this.CHAIN_ID.BSC]: "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888"
  };
  CRV = {
    [this.CHAIN_ID.MAINNET]: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    [this.CHAIN_ID.POLYGON]: "0x172370d5cd63279efa6d502dab29171933a610af",
    [this.CHAIN_ID.FANTOM]: "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    [this.CHAIN_ID.BSC]: ""
  };
  DAI = {
    [this.CHAIN_ID.MAINNET]: "0x6b175474e89094c44da98b954eedeac495271d0f",
    [this.CHAIN_ID.POLYGON]: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    [this.CHAIN_ID.FANTOM]: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
    [this.CHAIN_ID.BSC]: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3"
  };
  DOT = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
  };
  DPI = {
    [this.CHAIN_ID.MAINNET]: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
    [this.CHAIN_ID.POLYGON]: "0x85955046df4668e1dd369d2de9f3aeb98dd2a369",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0xab671ea900a8e3c959f5bd29ceb5e370ba75bb9e"
  };
  EOS = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6"
  };
  FIL = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  FRAX = {
    [this.CHAIN_ID.MAINNET]: "0x853d955acef822db058eb8505911ed77f175b99e",
    [this.CHAIN_ID.POLYGON]: "0x104592a158490a9228070e0a8e5343b499e125d0",
    [this.CHAIN_ID.FANTOM]: "0xaf319e5789945197e365e7f7fbfc56b130523b33",
    [this.CHAIN_ID.BSC]: "0x29ced01c447166958605519f10dcf8b0255fb379"
  };
  FXS = {
    [this.CHAIN_ID.MAINNET]: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    [this.CHAIN_ID.POLYGON]: "0x3e121107f6f22da4911079845a470757af4e1a1b",
    [this.CHAIN_ID.FANTOM]: "0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
    [this.CHAIN_ID.BSC]: "0xde2f075f6f14eb9d96755b24e416a53e736ca363"
  };
  HEGIC = {
    [this.CHAIN_ID.MAINNET]: "0x584bc13c7d411c00c01a62e8019472de68768430",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "0x44b26e839eb3572c5e959f994804a5de66600349",
    [this.CHAIN_ID.BSC]: ""
  };
  IBBTC = {
    [this.CHAIN_ID.MAINNET]: "0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f",
    [this.CHAIN_ID.POLYGON]: "0x4eac4c4e9050464067d673102f8e24b2fcceb350",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IOTX = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x9678e42cebeb63f23197d726b29b1cb20d0064e5"
  };
  KP3R = {
    [this.CHAIN_ID.MAINNET]: "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "0x2a5062d22adcfaafbd5c541d4da82e4b450d4212",
    [this.CHAIN_ID.BSC]: ""
  };
  LINK = {
    [this.CHAIN_ID.MAINNET]: "0x514910771af9ca656af840dff83e8264ecf986ca",
    [this.CHAIN_ID.POLYGON]: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    [this.CHAIN_ID.FANTOM]: "0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8",
    [this.CHAIN_ID.BSC]: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd"
  };
  LTC = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94"
  };
  QUICK = {
    [this.CHAIN_ID.MAINNET]: "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
    [this.CHAIN_ID.POLYGON]: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  RENBTC = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  RENZEC = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SFI = {
    [this.CHAIN_ID.MAINNET]: "0xb753428af26e81097e7fd17f40c88aaa3e04902c",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "0x924828a9fb17d47d0eb64b57271d10706699ff11",
    [this.CHAIN_ID.BSC]: ""
  };
  SNX = {
    [this.CHAIN_ID.MAINNET]: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    [this.CHAIN_ID.POLYGON]: "0x50b728d8d964fd00c2d0aad81718b71311fef68a",
    [this.CHAIN_ID.FANTOM]: "0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc",
    [this.CHAIN_ID.BSC]: "0x9ac983826058b8a9c7aa1c9171441191232e8404"
  };
  SUSD = {
    [this.CHAIN_ID.MAINNET]: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    [this.CHAIN_ID.POLYGON]: "0xf81b4bec6ca8f9fe7be01ca734f55b2b6e03a7a0",
    [this.CHAIN_ID.FANTOM]: "0x0e1694483ebb3b74d3054e383840c6cf011e518e",
    [this.CHAIN_ID.BSC]: ""
  };
  SUSHI = {
    [this.CHAIN_ID.MAINNET]: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    [this.CHAIN_ID.POLYGON]: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    [this.CHAIN_ID.FANTOM]: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
    [this.CHAIN_ID.BSC]: "0x947950bcc74888a40ffa2593c5798f11fc9124c4"
  };
  SXP = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a"
  };
  TWT = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x4b0f1812e5df2a09796481ff14017e6005508003"
  };
  UNI = {
    [this.CHAIN_ID.MAINNET]: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    [this.CHAIN_ID.POLYGON]: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1"
  };
  USDC = {
    [this.CHAIN_ID.MAINNET]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    [this.CHAIN_ID.POLYGON]: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    [this.CHAIN_ID.FANTOM]: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    [this.CHAIN_ID.BSC]: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
  };
  USDT = {
    [this.CHAIN_ID.MAINNET]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    [this.CHAIN_ID.POLYGON]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x55d398326f99059ff775485246999027b3197955"
  };
  VAI = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7"
  };
  WBTC = {
    [this.CHAIN_ID.MAINNET]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    [this.CHAIN_ID.POLYGON]: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    [this.CHAIN_ID.FANTOM]: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    [this.CHAIN_ID.BSC]: ""
  };
  WBNB = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  };
  WETH = {
    [this.CHAIN_ID.MAINNET]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    [this.CHAIN_ID.POLYGON]: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    [this.CHAIN_ID.FANTOM]: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
    [this.CHAIN_ID.BSC]: "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
  };
  WFTM = {
    [this.CHAIN_ID.MAINNET]: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    [this.CHAIN_ID.POLYGON]: "0xc9c1c1c20b3658f8787cc2fd702267791f224ce1",
    [this.CHAIN_ID.FANTOM]: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
    [this.CHAIN_ID.BSC]: ""
  };
  WMATIC = {
    [this.CHAIN_ID.MAINNET]: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    [this.CHAIN_ID.POLYGON]: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  XRP = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe"
  };
  XTZ = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x16939ef78684453bfdfb47825f8a5f714f12623a"
  };
  YFI = {
    [this.CHAIN_ID.MAINNET]: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    [this.CHAIN_ID.POLYGON]: "0xda537104d6a5edd53c6fbba9a898708e465260b6",
    [this.CHAIN_ID.FANTOM]: "0x29b0Da86e484E1C0029B56e817912d778aC0EC69",
    [this.CHAIN_ID.BSC]: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e"
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
    [this.CHAIN_ID.FANTOM]: "https://api.thegraph.com/subgraphs/name/ord786/fantom-blocks",
    [this.CHAIN_ID.BSC]: "https://api.thegraph.com/subgraphs/name/elkfinance/bsc-blocks"
  };


  // utils
  PRECISION = 1e18;
  YEAR_IN_SEC = 31556952;
  MONTH_IN_SEC = 30 * 24 * 60 * 60;
  WEEK_IN_SEC = 7 * 24 * 60 * 60;
  DAY_IN_SEC = 24 * 60 * 60;
}
