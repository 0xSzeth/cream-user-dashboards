import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantomComponent } from './fantom.component';

describe('FantomComponent', () => {
  let component: FantomComponent;
  let fixture: ComponentFixture<FantomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
