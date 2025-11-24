import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionApiComponent } from './sanction-api.component';

describe('SanctionApiComponent', () => {
  let component: SanctionApiComponent;
  let fixture: ComponentFixture<SanctionApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanctionApiComponent]
    });
    fixture = TestBed.createComponent(SanctionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
