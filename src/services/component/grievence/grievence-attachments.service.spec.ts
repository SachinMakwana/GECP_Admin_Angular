import { TestBed } from '@angular/core/testing';

import { GrievenceAttachmentService } from './grievence-attachments.service';

describe('GrievenceAttachmentsService', () => {
  let service: GrievenceAttachmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrievenceAttachmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
