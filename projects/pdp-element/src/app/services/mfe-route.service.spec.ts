import { TestBed } from '@angular/core/testing';

import { MfeRouteService } from './mfe-route.service';

describe('MfeRouteService', () => {
  let service: MfeRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
