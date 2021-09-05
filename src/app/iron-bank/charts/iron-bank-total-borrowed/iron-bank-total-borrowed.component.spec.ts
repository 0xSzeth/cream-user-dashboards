import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBankTotalBorrowedComponent } from './iron-bank-total-borrowed.component';

describe('IronBankTotalBorrowedComponent', () => {
  let component: IronBankTotalBorrowedComponent;
  let fixture: ComponentFixture<IronBankTotalBorrowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronBankTotalBorrowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronBankTotalBorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
