import { TestBed } from '@angular/core/testing';

import { NssService } from './nss.service';

describe('NssService', () => {
  let service: NssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
