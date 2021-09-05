import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBankTotalValueLockedComponent } from './iron-bank-total-value-locked.component';

describe('IronBankTotalValueLockedComponent', () => {
  let component: IronBankTotalValueLockedComponent;
  let fixture: ComponentFixture<IronBankTotalValueLockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronBankTotalValueLockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronBankTotalValueLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
