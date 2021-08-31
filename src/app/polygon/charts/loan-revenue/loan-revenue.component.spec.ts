import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRevenueComponent } from './loan-revenue.component';

describe('LoanRevenueComponent', () => {
  let component: LoanRevenueComponent;
  let fixture: ComponentFixture<LoanRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
