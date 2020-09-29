import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SAttachments } from '../../../app/models/ssip/s-attachments.model';

@Injectable({
  providedIn: 'root'
})
export class SAttachmentsService {
  selectedSAttachments: SAttachments;
  sAttachments: SAttachments[];
  readonly baseURL = 'http://localhost:3000/ssip_attachments';

  constructor(private http: HttpClient) {
    this.selectedSAttachments = new SAttachments();
  }

  getSAttachments() {
    return this.http.get(this.baseURL);
  }

  getSAttachmentsById(_id: number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postSAttachments(sAttachments: SAttachments) {
    return this.http.post(this.baseURL, sAttachments);
  }

  updateSAttachments(sAttachments: SAttachments, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, sAttachments);
  }

  deleteSAttachments(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
