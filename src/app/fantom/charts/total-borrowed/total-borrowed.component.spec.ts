import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBorrowedComponent } from './total-borrowed.component';

describe('TotalBorrowedComponent', () => {
  let component: TotalBorrowedComponent;
  let fixture: ComponentFixture<TotalBorrowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalBorrowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
