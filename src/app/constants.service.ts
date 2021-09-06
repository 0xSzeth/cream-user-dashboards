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

  ONEINCH = {
    [this.CHAIN_ID.MAINNET]: "0x111111111117dc0aa78b770fa6a738034120c302",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
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
  AKRO = {
    [this.CHAIN_ID.MAINNET]: "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  ALPHA = {
    [this.CHAIN_ID.MAINNET]: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0xa1faa113cbe53436df28ff0aee54275c13b40975"
  };
  AMP = {
    [this.CHAIN_ID.MAINNET]: "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  ARMOR = {
    [this.CHAIN_ID.MAINNET]: "0x1337def16f9b486faed0293eb623dc8395dfe46a",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  ARNXM = {
    [this.CHAIN_ID.MAINNET]: "0x1337def18c680af1f9f45cbcab6309562975b1dd",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
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
  BAC = {
    [this.CHAIN_ID.MAINNET]: "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  BAL = {
    [this.CHAIN_ID.MAINNET]: "0xba100000625a3754423978a60c9317c58a424e3d",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
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
  BBTC = {
    [this.CHAIN_ID.MAINNET]: "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  BCH = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf"
  };
  BOND = {
    [this.CHAIN_ID.MAINNET]: "0x0391d2021f89dc339f60fff84546ea23e337750f",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  BNB = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  BNT = {
    [this.CHAIN_ID.MAINNET]: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  BUSD = {
    [this.CHAIN_ID.MAINNET]: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
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
  CDAI = {
    [this.CHAIN_ID.MAINNET]: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  CEL = {
    [this.CHAIN_ID.MAINNET]: "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  COMP = {
    [this.CHAIN_ID.MAINNET]: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
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
  CRETH2 = {
    [this.CHAIN_ID.MAINNET]: "0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  CRV = {
    [this.CHAIN_ID.MAINNET]: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    [this.CHAIN_ID.POLYGON]: "0x172370d5cd63279efa6d502dab29171933a610af",
    [this.CHAIN_ID.FANTOM]: "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    [this.CHAIN_ID.BSC]: ""
  };
  CUSDC = {
    [this.CHAIN_ID.MAINNET]: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  CUSDT = {
    [this.CHAIN_ID.MAINNET]: "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
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
  DUSD = {
    [this.CHAIN_ID.MAINNET]: "0x5bc25f649fc4e26069ddf4cf4010f9f706c23831",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  ESD = {
    [this.CHAIN_ID.MAINNET]: "0x36f3fd68e7325a35eb768f1aedaae9ea0689d723",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  EOS = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6"
  };
  EURS = {
    [this.CHAIN_ID.MAINNET]: "0xdb25f211ab05b1c97d595516f45794528a807ad8",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  EURT = {
    [this.CHAIN_ID.MAINNET]: "0xc581b735a1688071a1746c968e0798d642ede491",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  FEI = {
    [this.CHAIN_ID.MAINNET]: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
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
  FTT = {
    [this.CHAIN_ID.MAINNET]: "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  FXS = {
    [this.CHAIN_ID.MAINNET]: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    [this.CHAIN_ID.POLYGON]: "0x3e121107f6f22da4911079845a470757af4e1a1b",
    [this.CHAIN_ID.FANTOM]: "0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
    [this.CHAIN_ID.BSC]: "0xde2f075f6f14eb9d96755b24e416a53e736ca363"
  };
  GNO = {
    [this.CHAIN_ID.MAINNET]: "0x6810e776880c02933d47db1b9fc05908e5386b96",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  GUSD = {
    [this.CHAIN_ID.MAINNET]: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  HBTC = {
    [this.CHAIN_ID.MAINNET]: "0x0316EB71485b0Ab14103307bf65a021042c6d380",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  HEGIC = {
    [this.CHAIN_ID.MAINNET]: "0x584bc13c7d411c00c01a62e8019472de68768430",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "0x44b26e839eb3572c5e959f994804a5de66600349",
    [this.CHAIN_ID.BSC]: ""
  };
  HFIL = {
    [this.CHAIN_ID.MAINNET]: "0x9afb950948c2370975fb91a441f36fdc02737cd4",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  HUSD = {
    [this.CHAIN_ID.MAINNET]: "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBAUD = {
    [this.CHAIN_ID.MAINNET]: "0xfafdf0c4c1cb09d430bf88c75d88bb46dae09967",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBBTC = {
    [this.CHAIN_ID.MAINNET]: "0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f",
    [this.CHAIN_ID.POLYGON]: "0x4eac4c4e9050464067d673102f8e24b2fcceb350",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBCHF = {
    [this.CHAIN_ID.MAINNET]: "0x1cc481ce2bd2ec7bf67d1be64d4878b16078f309",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBEUR = {
    [this.CHAIN_ID.MAINNET]: "0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBGBP = {
    [this.CHAIN_ID.MAINNET]: "0x69681f8fde45345c3870bcd5eaf4a05a60e7d227",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBJPY = {
    [this.CHAIN_ID.MAINNET]: "0x5555f75e3d5278082200fb451d1b6ba946d8e13b",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  IBKRW = {
    [this.CHAIN_ID.MAINNET]: "0x95dfdc8161832e4ff7816ac4b6367ce201538253",
    [this.CHAIN_ID.POLYGON]: "",
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
  LEND = {
    [this.CHAIN_ID.MAINNET]: "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  LINK = {
    [this.CHAIN_ID.MAINNET]: "0x514910771af9ca656af840dff83e8264ecf986ca",
    [this.CHAIN_ID.POLYGON]: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    [this.CHAIN_ID.FANTOM]: "0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8",
    [this.CHAIN_ID.BSC]: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd"
  };
  LON = {
    [this.CHAIN_ID.MAINNET]: "0x0000000000095413afc295d19edeb1ad7b71c952",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  LTC = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94"
  };
  MLN = {
    [this.CHAIN_ID.MAINNET]: "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  MTA = {
    [this.CHAIN_ID.MAINNET]: "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  MUSD = {
    [this.CHAIN_ID.MAINNET]: "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  OCEAN = {
    [this.CHAIN_ID.MAINNET]: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  OGN = {
    [this.CHAIN_ID.MAINNET]: "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  OMG = {
    [this.CHAIN_ID.MAINNET]: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  PAX = {
    [this.CHAIN_ID.MAINNET]: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  PAXG = {
    [this.CHAIN_ID.MAINNET]: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  PICKLE = {
    [this.CHAIN_ID.MAINNET]: "0x429881672b9ae42b8eba0e26cd9c73711b891ca5",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  QUICK = {
    [this.CHAIN_ID.MAINNET]: "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
    [this.CHAIN_ID.POLYGON]: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  RAI = {
    [this.CHAIN_ID.MAINNET]: "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  RARI = {
    [this.CHAIN_ID.MAINNET]: "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  RENBTC = {
    [this.CHAIN_ID.MAINNET]: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
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
  RUNE = {
    [this.CHAIN_ID.MAINNET]: "0x3155ba85d5f96b2d030a4966af206230e46849cb",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  PERP = {
    [this.CHAIN_ID.MAINNET]: "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SETT = {
    [this.CHAIN_ID.MAINNET]: "0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SEUR = {
    [this.CHAIN_ID.MAINNET]: "0xd71ecff9342a5ced620049e616c5035f1db98620",
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
  SRM = {
    [this.CHAIN_ID.MAINNET]: "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
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
  SWAP = {
    [this.CHAIN_ID.MAINNET]: "0xcc4304a31d09258b0029ea7fe63d032f52e44efe",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SWAG = {
    [this.CHAIN_ID.MAINNET]: "0x87edffde3e14c7a66c9b9724747a1c5696b742e6",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SXP = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a"
  };
  TBTC = {
    [this.CHAIN_ID.MAINNET]: "0x8daebade922df735c38c80c7ebd708af50815faa",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
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
  USDP = {
    [this.CHAIN_ID.MAINNET]: "0x1456688345527be1f37e9e627da0837d6f08c925",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  USDT = {
    [this.CHAIN_ID.MAINNET]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    [this.CHAIN_ID.POLYGON]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x55d398326f99059ff775485246999027b3197955"
  };
  UST = {
    [this.CHAIN_ID.MAINNET]: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  VAI = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7"
  };
  VSP = {
    [this.CHAIN_ID.MAINNET]: "0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
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
  WNXM = {
    [this.CHAIN_ID.MAINNET]: "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  WOO = {
    [this.CHAIN_ID.MAINNET]: "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  XRP = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe"
  };
  XSUSHI = {
    [this.CHAIN_ID.MAINNET]: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  XTZ = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: "0x16939ef78684453bfdfb47825f8a5f714f12623a"
  };
  Y3CRV = {
    [this.CHAIN_ID.MAINNET]: "0x9ca85572e6a3ebf24dedd195623f188735a5179f",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YFI = {
    [this.CHAIN_ID.MAINNET]: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    [this.CHAIN_ID.POLYGON]: "0xda537104d6a5edd53c6fbba9a898708e465260b6",
    [this.CHAIN_ID.FANTOM]: "0x29b0Da86e484E1C0029B56e817912d778aC0EC69",
    [this.CHAIN_ID.BSC]: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e"
  };

  // Yearn tokens
  VVSP = {
    [this.CHAIN_ID.MAINNET]: "0xba4cfe5741b357fa371b506e5db0774abfecf8fc",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YVCURVE_STETH = {
    [this.CHAIN_ID.MAINNET]: "0xdcd90c7f6324cfa40d7169ef80b12031770b4325",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YVCURVE_SETH = {
    [this.CHAIN_ID.MAINNET]: "0x986b4aff588a109c09b50a03f42e4110e29d353f",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YWETH = {
    [this.CHAIN_ID.MAINNET]: "0xe1237aa7f535b0cc33fd973d66cbf830354d16c7",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YVWETH = {
    [this.CHAIN_ID.MAINNET]: "0xa9fe4601811213c340e850ea305481aff02f5b28",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YVCURVE_IB = {
    [this.CHAIN_ID.MAINNET]: "0x27b7b1ad7288079a66d12350c828d3c00a6f07d7",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YUSD = { // v?
    [this.CHAIN_ID.MAINNET]: "0x4b5bfd52124784745c1071dcb244c6688d2533d3",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YUSD2 = { //alot
    [this.CHAIN_ID.MAINNET]: "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  YUSD3 = { //alot
    [this.CHAIN_ID.MAINNET]: "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };

  // LP Tokens
  SUSHI_DAI_ETH = {
    [this.CHAIN_ID.MAINNET]: "0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SUSHI_USDT_ETH = {
    [this.CHAIN_ID.MAINNET]: "0x06da0fd433c1a5d7a4faa01111c044910a184553",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SUSHI_USDC_ETH = {
    [this.CHAIN_ID.MAINNET]: "0x397ff1542f962076d0bfe58ea045ffa2d347aca0",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SUSHI_SUSHI_ETH = {
    [this.CHAIN_ID.MAINNET]: "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SUSHI_WBTC_ETH = {
    [this.CHAIN_ID.MAINNET]: "0xceff51756c56ceffca006cd410b03ffc46dd3a58",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  SUSHI_YFI_ETH = {
    [this.CHAIN_ID.MAINNET]: "0x088ee5007c98a9677165d78dd2109ae4a3d04d0c",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };

  UNI_WBTC_ETH = {
    [this.CHAIN_ID.MAINNET]: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  UNI_USDC_ETH = {
    [this.CHAIN_ID.MAINNET]: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  UNI_DAI_ETH = {
    [this.CHAIN_ID.MAINNET]: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  UNI_USDT_ETH = {
    [this.CHAIN_ID.MAINNET]: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
    [this.CHAIN_ID.POLYGON]: "",
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
  GRAPHQL_PANCAKESWAP = 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2/graphql';

  GRAPHQL_SUSHISWAP_TEST = {
    [this.CHAIN_ID.MAINNET]: "",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "https://api.thegraph.com/subgraphs/name/sushiswap/fantom-exchange",
    [this.CHAIN_ID.BSC]: ""
  };

  GRAPHQL_BLOCKS = {
    [this.CHAIN_ID.MAINNET]: "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",
    [this.CHAIN_ID.POLYGON]: "https://api.thegraph.com/subgraphs/name/elkfinance/matic-blocks",
    [this.CHAIN_ID.FANTOM]: "https://api.thegraph.com/subgraphs/name/ord786/fantom-blocks",
    [this.CHAIN_ID.BSC]: "https://api.thegraph.com/subgraphs/name/elkfinance/bsc-blocks"
  };

  // other
  // 0x9A975fe93CFf8b0387b958adB9082B0ed0659AD2 is the eth-v1 oracle
  CREAM_ORACLE = {
    //[0]: "0x3aBce8F1DB258fBc64827b0926e14A0F90525CF7",
    [this.CHAIN_ID.MAINNET]: "0x9A975fe93CFf8b0387b958adB9082B0ed0659AD2",
    [this.CHAIN_ID.POLYGON]: "0x0a4AcCD9D150AD4DDC7eA2e6151243CE668Bf2f5",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };
  CREAM_ORACLE_PROXY = {
    [this.CHAIN_ID.MAINNET]: "0x338EEE1F7B89CE6272f302bDC4b952C13b221f1d",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };

  UNISWAP_V2_ORACLE = {
    [this.CHAIN_ID.MAINNET]: "0x910aD02D355c2966e8dD8E32C890cD50DB29C3B9",
    [this.CHAIN_ID.POLYGON]: "",
    [this.CHAIN_ID.FANTOM]: "",
    [this.CHAIN_ID.BSC]: ""
  };


  // utils
  PRECISION = 1e18;
  YEAR_IN_SEC = 31556952;
  MONTH_IN_SEC = 30 * 24 * 60 * 60;
  WEEK_IN_SEC = 7 * 24 * 60 * 60;
  DAY_IN_SEC = 24 * 60 * 60;
}
