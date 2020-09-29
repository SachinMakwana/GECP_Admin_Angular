import { TestBed } from '@angular/core/testing';

import { SAttachmentsService } from './s-attachments.service';

describe('SAttachmentsService', () => {
  let service: SAttachmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAttachmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
