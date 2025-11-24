import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtandcriminalApiComponent } from './courtandcriminal-api.component';

describe('CourtandcriminalApiComponent', () => {
  let component: CourtandcriminalApiComponent;
  let fixture: ComponentFixture<CourtandcriminalApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourtandcriminalApiComponent]
    });
    fixture = TestBed.createComponent(CourtandcriminalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
