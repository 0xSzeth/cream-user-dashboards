import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthV1TotalValueLockedComponent } from './eth-v1-total-value-locked.component';

describe('EthV1TotalValueLockedComponent', () => {
  let component: EthV1TotalValueLockedComponent;
  let fixture: ComponentFixture<EthV1TotalValueLockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthV1TotalValueLockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthV1TotalValueLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
