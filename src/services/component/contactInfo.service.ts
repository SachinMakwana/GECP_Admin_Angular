import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInfo } from '../../app/models/contactInfo.model';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  selectedContactInfo: ContactInfo;
  contactInfo : ContactInfo[];
  readonly baseURL = "http://localhost:3000/contactInfo";


  constructor(private http: HttpClient) {
    this.selectedContactInfo  = new ContactInfo();
  }


  postContactInfo(con : ContactInfo) {
    return this.http.post(this.baseURL, con);
  }

  getContactInfo() {
    return this.http.get(this.baseURL);
  }

  updateContactInfo(con: ContactInfo, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, con);
  }
  deleteContactInfo(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

