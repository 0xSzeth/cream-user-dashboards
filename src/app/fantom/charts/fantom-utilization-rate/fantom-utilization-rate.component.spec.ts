import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizationRateComponent } from './utilization-rate.component';

describe('UtilizationRateComponent', () => {
  let component: UtilizationRateComponent;
  let fixture: ComponentFixture<UtilizationRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizationRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
