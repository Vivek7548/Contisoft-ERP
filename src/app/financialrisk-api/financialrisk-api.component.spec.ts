import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialriskApiComponent } from './financialrisk-api.component';

describe('FinancialriskApiComponent', () => {
  let component: FinancialriskApiComponent;
  let fixture: ComponentFixture<FinancialriskApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialriskApiComponent]
    });
    fixture = TestBed.createComponent(FinancialriskApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
