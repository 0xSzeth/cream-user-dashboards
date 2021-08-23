import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBankComponent } from './iron-bank.component';

describe('IronBankComponent', () => {
  let component: IronBankComponent;
  let fixture: ComponentFixture<IronBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
