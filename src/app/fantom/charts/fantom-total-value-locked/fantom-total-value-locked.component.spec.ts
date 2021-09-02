import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValueLockedComponent } from './total-value-locked.component';

describe('TotalValueLockedComponent', () => {
  let component: TotalValueLockedComponent;
  let fixture: ComponentFixture<TotalValueLockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalValueLockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalValueLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
