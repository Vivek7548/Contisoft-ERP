import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepApiComponent } from './pep-api.component';

describe('PepApiComponent', () => {
  let component: PepApiComponent;
  let fixture: ComponentFixture<PepApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PepApiComponent]
    });
    fixture = TestBed.createComponent(PepApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
