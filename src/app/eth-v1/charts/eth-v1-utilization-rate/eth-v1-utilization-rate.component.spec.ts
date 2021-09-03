import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthV1UtilizationRateComponent } from './eth-v1-utilization-rate.component';

describe('EthV1UtilizationRateComponent', () => {
  let component: EthV1UtilizationRateComponent;
  let fixture: ComponentFixture<EthV1UtilizationRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthV1UtilizationRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthV1UtilizationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
