import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { SMemberDetails } from '../../../app/models/ssip/s-member-details.model';

@Injectable({
  providedIn: 'root'
})
export class SMemberDetailsService {
  selectedSDetails: SMemberDetails;
  sMemberDetails: SMemberDetails[];
  readonly baseURL = 'http://localhost:3000/ssip_memberDetails'

  constructor(private http: HttpClient) {
    this.selectedSDetails = new SMemberDetails();
  }

  getSMemberDetails() {
    return this.http.get(this.baseURL);
  }

  getSMemberDetailsById(_id: number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postSMemberDetails(sMemberDetails: SMemberDetails) {
    return this.http.post(this.baseURL, sMemberDetails);
  }

  updateSMemberDetails(sMemberDetails: SMemberDetails, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, sMemberDetails);
  }

  deleteSMemberDetails(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
