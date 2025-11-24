import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbtrEstampComponent } from './esbtr-estamp.component';

describe('EsbtrEstampComponent', () => {
  let component: EsbtrEstampComponent;
  let fixture: ComponentFixture<EsbtrEstampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsbtrEstampComponent]
    });
    fixture = TestBed.createComponent(EsbtrEstampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
