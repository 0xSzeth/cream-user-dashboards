import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthV1Component } from './eth-v1.component';

describe('EthV1Component', () => {
  let component: EthV1Component;
  let fixture: ComponentFixture<EthV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
