import { TestBed } from '@angular/core/testing';

import { GrievenceMemberService } from './grievence-member.service';

describe('GrievenceMemberService', () => {
  let service: GrievenceMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrievenceMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
