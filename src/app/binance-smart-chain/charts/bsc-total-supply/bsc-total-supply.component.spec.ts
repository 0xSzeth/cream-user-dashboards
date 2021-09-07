import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscTotalSupplyComponent } from './bsc-total-supply.component';

describe('BscTotalSupplyComponent', () => {
  let component: BscTotalSupplyComponent;
  let fixture: ComponentFixture<BscTotalSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscTotalSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscTotalSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
