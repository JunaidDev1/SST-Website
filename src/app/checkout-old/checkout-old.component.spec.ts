import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOldComponent } from './checkout-old.component';

describe('CheckoutOldComponent', () => {
  let component: CheckoutOldComponent;
  let fixture: ComponentFixture<CheckoutOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
