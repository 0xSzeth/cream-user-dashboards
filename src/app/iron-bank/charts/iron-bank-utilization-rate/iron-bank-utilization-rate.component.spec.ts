import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBankUtilizationRateComponent } from './iron-bank-utilization-rate.component';

describe('IronBankUtilizationRateComponent', () => {
  let component: IronBankUtilizationRateComponent;
  let fixture: ComponentFixture<IronBankUtilizationRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronBankUtilizationRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronBankUtilizationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
