import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPopupDialogComponent } from './nav-popup-dialog.component';

describe('NavPopupDialogComponent', () => {
  let component: NavPopupDialogComponent;
  let fixture: ComponentFixture<NavPopupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavPopupDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPopupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
