import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscTotalValueLockedComponent } from './bsc-total-value-locked.component';

describe('BscTotalValueLockedComponent', () => {
  let component: BscTotalValueLockedComponent;
  let fixture: ComponentFixture<BscTotalValueLockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscTotalValueLockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscTotalValueLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
