import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GrievenceAttachment } from '../../../app/models/grievence/grievence-attachments.model';

@Injectable({
  providedIn: 'root'
})
export class GrievenceAttachmentService {
  selectedGrievenceAttachment: GrievenceAttachment;
  grievenceAttachments: GrievenceAttachment[];
  readonly baseURL = 'http://localhost:3000/grievence_attachments';

  constructor(private http: HttpClient) {
    this.selectedGrievenceAttachment = new GrievenceAttachment();
  }

  getGrievenceAttachment() {
    return this.http.get(this.baseURL);
  }

  getGrievenceAttachmentById(_id: number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postGrievenceAttachment(grievenceAttachment: GrievenceAttachment) {
    return this.http.post(this.baseURL, grievenceAttachment);
  }

  updateGrievenceAttachment(grievenceAttachment: GrievenceAttachment, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, grievenceAttachment);
  }

  deleteGrievenceAttachment(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
