import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoIceCreamHoldersComponent } from './no-ice-cream-holders.component';

describe('NoIceCreamHoldersComponent', () => {
  let component: NoIceCreamHoldersComponent;
  let fixture: ComponentFixture<NoIceCreamHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoIceCreamHoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoIceCreamHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
