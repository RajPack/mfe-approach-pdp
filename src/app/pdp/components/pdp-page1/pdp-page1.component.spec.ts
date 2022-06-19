import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpPage1Component } from './pdp-page1.component';

describe('PdpPage1Component', () => {
  let component: PdpPage1Component;
  let fixture: ComponentFixture<PdpPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdpPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
