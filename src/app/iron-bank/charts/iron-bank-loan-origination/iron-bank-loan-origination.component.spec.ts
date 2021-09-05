import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBankLoanOriginationComponent } from './iron-bank-loan-origination.component';

describe('IronBankLoanOriginationComponent', () => {
  let component: IronBankLoanOriginationComponent;
  let fixture: ComponentFixture<IronBankLoanOriginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronBankLoanOriginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronBankLoanOriginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
