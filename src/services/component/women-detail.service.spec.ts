import { TestBed } from '@angular/core/testing';

import { WomenDetailService } from './women-detail.service';

describe('WomenDetailService', () => {
  let service: WomenDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
