import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  // tokens
  CREAM = "0x2ba592f78db6436527729929aaf6c908497cb200";
  ICE_CREAM = "0x3986425b96F11972d31C78ff340908832C5c0043";

  // subgraph endpoints
  GRAPHQL_MAINNET = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-mainnet";
  GRAPHQL_IRONBANK = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-ironbank";
  GRAPHQL_POLYGON = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-polygon";
  GRAPHQL_FANTOM = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-fantom";
  GRAPHQL_BSC = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-bsc";

  GRAPHQL_UNISWAP_V2 = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';
  GRAPHQL_UNISWAP_V3 = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
  GRAPHQL_SUSHISWAP = 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange';

  // utils
  PRECISION = 1e18;
}
