import { TestBed } from '@angular/core/testing';

import { MfeStateResolverService } from './mfe-state-resolver.service';

describe('MfeStateResolverService', () => {
  let service: MfeStateResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeStateResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
