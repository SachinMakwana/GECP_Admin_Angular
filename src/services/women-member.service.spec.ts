import { TestBed } from '@angular/core/testing';

import { WomenMemberService } from './women-member.service';

describe('WomenMemberService', () => {
  let service: WomenMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
