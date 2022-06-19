import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpPage3Component } from './pdp-page3.component';

describe('PdpPage3Component', () => {
  let component: PdpPage3Component;
  let fixture: ComponentFixture<PdpPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdpPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
