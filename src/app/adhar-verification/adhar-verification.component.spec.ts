import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharVerificationComponent } from './adhar-verification.component';

describe('AdharVerificationComponent', () => {
  let component: AdharVerificationComponent;
  let fixture: ComponentFixture<AdharVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdharVerificationComponent]
    });
    fixture = TestBed.createComponent(AdharVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
