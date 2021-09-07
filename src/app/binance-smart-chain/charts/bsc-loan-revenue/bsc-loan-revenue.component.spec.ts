import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscLoanRevenueComponent } from './bsc-loan-revenue.component';

describe('BscLoanRevenueComponent', () => {
  let component: BscLoanRevenueComponent;
  let fixture: ComponentFixture<BscLoanRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscLoanRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscLoanRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
