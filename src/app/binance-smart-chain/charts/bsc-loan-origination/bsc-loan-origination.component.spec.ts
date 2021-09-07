import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscLoanOriginationComponent } from './bsc-loan-origination.component';

describe('BscLoanOriginationComponent', () => {
  let component: BscLoanOriginationComponent;
  let fixture: ComponentFixture<BscLoanOriginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscLoanOriginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscLoanOriginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
