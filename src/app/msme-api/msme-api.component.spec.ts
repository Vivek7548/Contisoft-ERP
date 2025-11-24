import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsmeApiComponent } from './msme-api.component';

describe('MsmeApiComponent', () => {
  let component: MsmeApiComponent;
  let fixture: ComponentFixture<MsmeApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsmeApiComponent]
    });
    fixture = TestBed.createComponent(MsmeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
