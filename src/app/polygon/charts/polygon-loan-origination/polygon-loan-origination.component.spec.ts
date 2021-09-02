import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOriginationComponent } from './loan-origination.component';

describe('LoanOriginationComponent', () => {
  let component: LoanOriginationComponent;
  let fixture: ComponentFixture<LoanOriginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOriginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOriginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
