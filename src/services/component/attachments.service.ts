import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Attachments } from '../../app/models/attachments.model';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {
  selectedAttachments: Attachments;
  attachments: Attachments[];
  readonly baseURL = "http://localhost:5000/attachments";

  constructor(private http: HttpClient) {
    this.selectedAttachments = new Attachments();
  }

  postAttachments(attachments: Attachments) {
    return this.http.post(this.baseURL, attachments);
  }

  getAttachments() {
    return this.http.get(this.baseURL);
  }

  updateAttachments(attachments: Attachments, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, attachments);
  }

  deleteAttachments(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
