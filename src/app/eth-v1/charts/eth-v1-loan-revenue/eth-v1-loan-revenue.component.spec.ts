import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthV1LoanRevenueComponent } from './eth-v1-loan-revenue.component';

describe('EthV1LoanRevenueComponent', () => {
  let component: EthV1LoanRevenueComponent;
  let fixture: ComponentFixture<EthV1LoanRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthV1LoanRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthV1LoanRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
