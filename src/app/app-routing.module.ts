import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IceCREAMComponent } from './ice-cream/ice-cream.component';
import { EthV1Component } from './eth-v1/eth-v1.component';
import { IronBankComponent } from './iron-bank/iron-bank.component';
import { BinanceSmartChainComponent } from './binance-smart-chain/binance-smart-chain.component';
import { PolygonComponent } from './polygon/polygon.component';
import { FantomComponent } from './fantom/fantom.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'iceCREAM',
    component: IceCREAMComponent,
  },
  {
    path: 'ethv1',
    component: EthV1Component,
  },
  {
    path: 'ironBank',
    component: IronBankComponent,
  },
  {
    path: 'bsc',
    component: BinanceSmartChainComponent,
  },
  {
    path: 'polygon',
    component: PolygonComponent,
  },
  {
    path: 'fantom',
    component: FantomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
