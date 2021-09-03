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
import { CreamTokenHoldersComponent } from './ice-cream/charts/cream-token-holders/cream-token-holders.component';
import { ChartsModule } from 'ng2-charts';
import { PolygonTotalValueLockedComponent } from './polygon/charts/polygon-total-value-locked/polygon-total-value-locked.component';
import { PolygonTotalSupplyComponent } from './polygon/charts/polygon-total-supply/polygon-total-supply.component';
import { PolygonTotalBorrowedComponent } from './polygon/charts/polygon-total-borrowed/polygon-total-borrowed.component';
import { PolygonUtilizationRateComponent } from './polygon/charts/polygon-utilization-rate/polygon-utilization-rate.component';
import { PolygonLoanOriginationComponent } from './polygon/charts/polygon-loan-origination/polygon-loan-origination.component';
import { PolygonLoanRevenueComponent } from './polygon/charts/polygon-loan-revenue/polygon-loan-revenue.component';
import { FormsModule } from '@angular/forms';
import { FantomTotalValueLockedComponent } from './fantom/charts/fantom-total-value-locked/fantom-total-value-locked.component';
import { FantomTotalSupplyComponent } from './fantom/charts/fantom-total-supply/fantom-total-supply.component';
import { FantomTotalBorrowedComponent } from './fantom/charts/fantom-total-borrowed/fantom-total-borrowed.component';
import { FantomUtilizationRateComponent } from './fantom/charts/fantom-utilization-rate/fantom-utilization-rate.component';
import { FantomLoanOriginationComponent } from './fantom/charts/fantom-loan-origination/fantom-loan-origination.component';
import { FantomLoanRevenueComponent } from './fantom/charts/fantom-loan-revenue/fantom-loan-revenue.component';
import { EthV1TotalValueLockedComponent } from './eth-v1/charts/eth-v1-total-value-locked/eth-v1-total-value-locked.component';
import { EthV1TotalSupplyComponent } from './eth-v1/charts/eth-v1-total-supply/eth-v1-total-supply.component';
import { EthV1TotalBorrowedComponent } from './eth-v1/charts/eth-v1-total-borrowed/eth-v1-total-borrowed.component';
import { EthV1UtilizationRateComponent } from './eth-v1/charts/eth-v1-utilization-rate/eth-v1-utilization-rate.component';
import { EthV1LoanOriginationComponent } from './eth-v1/charts/eth-v1-loan-origination/eth-v1-loan-origination.component';
import { EthV1LoanRevenueComponent } from './eth-v1/charts/eth-v1-loan-revenue/eth-v1-loan-revenue.component';

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
    FantomComponent,
    CreamTokenHoldersComponent,
    PolygonTotalValueLockedComponent,
    PolygonTotalSupplyComponent,
    PolygonTotalBorrowedComponent,
    PolygonUtilizationRateComponent,
    PolygonLoanOriginationComponent,
    PolygonLoanRevenueComponent,
    FantomTotalValueLockedComponent,
    FantomTotalSupplyComponent,
    FantomTotalBorrowedComponent,
    FantomUtilizationRateComponent,
    FantomLoanOriginationComponent,
    FantomLoanRevenueComponent,
    EthV1TotalValueLockedComponent,
    EthV1TotalSupplyComponent,
    EthV1TotalBorrowedComponent,
    EthV1UtilizationRateComponent,
    EthV1LoanOriginationComponent,
    EthV1LoanRevenueComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
