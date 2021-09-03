import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthV1TotalSupplyComponent } from './eth-v1-total-supply.component';

describe('EthV1TotalSupplyComponent', () => {
  let component: EthV1TotalSupplyComponent;
  let fixture: ComponentFixture<EthV1TotalSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthV1TotalSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthV1TotalSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
