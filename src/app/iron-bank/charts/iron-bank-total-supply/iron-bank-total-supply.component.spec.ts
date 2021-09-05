import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBankTotalSupplyComponent } from './iron-bank-total-supply.component';

describe('IronBankTotalSupplyComponent', () => {
  let component: IronBankTotalSupplyComponent;
  let fixture: ComponentFixture<IronBankTotalSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronBankTotalSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronBankTotalSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
