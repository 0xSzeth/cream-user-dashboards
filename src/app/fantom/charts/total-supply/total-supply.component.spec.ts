import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSupplyComponent } from './total-supply.component';

describe('TotalSupplyComponent', () => {
  let component: TotalSupplyComponent;
  let fixture: ComponentFixture<TotalSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
