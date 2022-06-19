import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpPage2Component } from './pdp-page2.component';

describe('PdpPage2Component', () => {
  let component: PdpPage2Component;
  let fixture: ComponentFixture<PdpPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdpPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
