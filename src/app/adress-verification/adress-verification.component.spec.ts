import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressVerificationComponent } from './adress-verification.component';

describe('AdressVerificationComponent', () => {
  let component: AdressVerificationComponent;
  let fixture: ComponentFixture<AdressVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressVerificationComponent]
    });
    fixture = TestBed.createComponent(AdressVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
