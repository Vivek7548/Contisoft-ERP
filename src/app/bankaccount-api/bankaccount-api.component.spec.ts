import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountApiComponent } from './bankaccount-api.component';

describe('BankaccountApiComponent', () => {
  let component: BankaccountApiComponent;
  let fixture: ComponentFixture<BankaccountApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankaccountApiComponent]
    });
    fixture = TestBed.createComponent(BankaccountApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
