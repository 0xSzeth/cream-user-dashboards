import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  // tokens
  CREAM = "0x2ba592f78db6436527729929aaf6c908497cb200";
  ICE_CREAM = "0x3986425b96F11972d31C78ff340908832C5c0043";

  // subgraph endpoints
  GRAPHQL_POLYGON = "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-portfolio-polygon";

  // utils
  PRECISION = 1e18;
}
