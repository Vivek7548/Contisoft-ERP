import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkycVerificationComponent } from './ckyc-verification.component';

describe('CkycVerificationComponent', () => {
  let component: CkycVerificationComponent;
  let fixture: ComponentFixture<CkycVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CkycVerificationComponent]
    });
    fixture = TestBed.createComponent(CkycVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
