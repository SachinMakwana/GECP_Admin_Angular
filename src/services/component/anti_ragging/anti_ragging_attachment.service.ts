import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { AntiRaggingAttachment } from "../../../app/models/anti_ragging/anti-ragging_attachments.model";

@Injectable({
  providedIn: 'root'
})
export class AntiRaggingAttachmentService {
  selectedAntiRaggingAttachment: AntiRaggingAttachment;
  antiRaggingAttachments: AntiRaggingAttachment[];
  readonly baseURL = 'http://localhost:3000/anti_ragging_attachments';

  constructor(private http: HttpClient) { 
    this.selectedAntiRaggingAttachment = new AntiRaggingAttachment();
  }

  getAntiRaggingAttachment() {
    return this.http.get(this.baseURL);
  }

  getAntiRaggingAttachmentById(_id:number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postAntiRaggingAttachment(antiRaggingAttachment: AntiRaggingAttachment) {
    return this.http.post(this.baseURL, antiRaggingAttachment);
  }

  updateAntiRaggingAttachment(antiRaggingAttachment: AntiRaggingAttachment,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, antiRaggingAttachment);
  }

  deleteAntiRaggingAttachment(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
