import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IceCREAMComponent } from './ice-cream/ice-cream.component';
import { EthV1Component } from './eth-v1/eth-v1.component';
import { IronBankComponent } from './iron-bank/iron-bank.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
