import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinanceSmartChainComponent } from './binance-smart-chain.component';

describe('BinanceSmartChainComponent', () => {
  let component: BinanceSmartChainComponent;
  let fixture: ComponentFixture<BinanceSmartChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinanceSmartChainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinanceSmartChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
