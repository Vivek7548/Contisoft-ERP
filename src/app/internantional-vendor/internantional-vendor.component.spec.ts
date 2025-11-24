import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternantionalVendorComponent } from './internantional-vendor.component';

describe('InternantionalVendorComponent', () => {
  let component: InternantionalVendorComponent;
  let fixture: ComponentFixture<InternantionalVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternantionalVendorComponent]
    });
    fixture = TestBed.createComponent(InternantionalVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
