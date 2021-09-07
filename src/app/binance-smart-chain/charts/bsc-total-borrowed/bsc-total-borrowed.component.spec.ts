import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscTotalBorrowedComponent } from './bsc-total-borrowed.component';

describe('BscTotalBorrowedComponent', () => {
  let component: BscTotalBorrowedComponent;
  let fixture: ComponentFixture<BscTotalBorrowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscTotalBorrowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscTotalBorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
