import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CersaiAutomationComponent } from './cersai-automation.component';

describe('CersaiAutomationComponent', () => {
  let component: CersaiAutomationComponent;
  let fixture: ComponentFixture<CersaiAutomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CersaiAutomationComponent]
    });
    fixture = TestBed.createComponent(CersaiAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
