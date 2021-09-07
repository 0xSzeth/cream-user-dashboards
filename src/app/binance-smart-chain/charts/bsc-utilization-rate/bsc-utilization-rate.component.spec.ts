import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscUtilizationRateComponent } from './bsc-utilization-rate.component';

describe('BscUtilizationRateComponent', () => {
  let component: BscUtilizationRateComponent;
  let fixture: ComponentFixture<BscUtilizationRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscUtilizationRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscUtilizationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
