import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthV1LoanOriginationComponent } from './eth-v1-loan-origination.component';

describe('EthV1LoanOriginationComponent', () => {
  let component: EthV1LoanOriginationComponent;
  let fixture: ComponentFixture<EthV1LoanOriginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthV1LoanOriginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthV1LoanOriginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
