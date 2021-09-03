import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthV1TotalBorrowedComponent } from './eth-v1-total-borrowed.component';

describe('EthV1TotalBorrowedComponent', () => {
  let component: EthV1TotalBorrowedComponent;
  let fixture: ComponentFixture<EthV1TotalBorrowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthV1TotalBorrowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthV1TotalBorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
