import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBankLoanRevenueComponent } from './iron-bank-loan-revenue.component';

describe('IronBankLoanRevenueComponent', () => {
  let component: IronBankLoanRevenueComponent;
  let fixture: ComponentFixture<IronBankLoanRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronBankLoanRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronBankLoanRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
