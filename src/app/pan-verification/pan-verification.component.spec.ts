import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanVerificationComponent } from './pan-verification.component';

describe('PanVerificationComponent', () => {
  let component: PanVerificationComponent;
  let fixture: ComponentFixture<PanVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanVerificationComponent]
    });
    fixture = TestBed.createComponent(PanVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
