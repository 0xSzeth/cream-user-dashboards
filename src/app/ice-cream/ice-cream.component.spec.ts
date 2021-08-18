import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCREAMComponent } from './ice-cream.component';

describe('IceCREAMComponent', () => {
  let component: IceCREAMComponent;
  let fixture: ComponentFixture<IceCREAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCREAMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCREAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
