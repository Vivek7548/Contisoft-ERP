import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESignVerificationComponent } from './e-sign-verification.component';

describe('ESignVerificationComponent', () => {
  let component: ESignVerificationComponent;
  let fixture: ComponentFixture<ESignVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ESignVerificationComponent]
    });
    fixture = TestBed.createComponent(ESignVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
