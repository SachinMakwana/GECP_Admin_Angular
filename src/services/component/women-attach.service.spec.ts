import { TestBed } from '@angular/core/testing';

import { WomenAttachService } from './women-attach.service';

describe('WomenAttachService', () => {
  let service: WomenAttachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenAttachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
