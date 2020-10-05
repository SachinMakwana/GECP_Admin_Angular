import { TestBed } from '@angular/core/testing';

import { SDetailsService } from './s-details.service';

describe('SDetailsService', () => {
  let service: SDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
