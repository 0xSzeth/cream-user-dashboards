import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamTokenHoldersComponent } from './cream-token-holders.component';

describe('CreamTokenHoldersComponent', () => {
  let component: CreamTokenHoldersComponent;
  let fixture: ComponentFixture<CreamTokenHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreamTokenHoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreamTokenHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
