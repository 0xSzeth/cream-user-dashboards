import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceCREAMComponent } from './ice-cream/ice-cream.component';
import { EthV1Component } from './eth-v1/eth-v1.component';
import { IronBankComponent } from './iron-bank/iron-bank.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BinanceSmartChainComponent } from './binance-smart-chain/binance-smart-chain.component';
import { PolygonComponent } from './polygon/polygon.component';
import { FantomComponent } from './fantom/fantom.component';

@NgModule({
  declarations: [
    AppComponent,
    IceCREAMComponent,
    EthV1Component,
    IronBankComponent,
    HeaderComponent,
    HomeComponent,
    BinanceSmartChainComponent,
    PolygonComponent,
    FantomComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
