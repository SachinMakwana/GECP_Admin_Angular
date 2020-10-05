import { TestBed } from '@angular/core/testing';

import { SMemberDetailsService } from './s-member-details.service';

describe('SMemberDetailsService', () => {
  let service: SMemberDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMemberDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
