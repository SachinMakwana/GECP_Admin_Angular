import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GrievenceMembers } from '../../../app/models/grievence/grievence-member.model';

@Injectable({
  providedIn: 'root'
})
export class GrievenceMemberService {

  selectedGrievenceMembers: GrievenceMembers;
  grievenceMembers: GrievenceMembers[];
  readonly baseURL = 'http://localhost:3000/grievence_memberDetails';

  constructor(private http: HttpClient) {
    this.selectedGrievenceMembers = new GrievenceMembers();
  }

  getGrievenceMembers() {
    return this.http.get(this.baseURL);
  }

  getGrievenceMembersById(_id: number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postGrievenceMembers(grievenceMembers: GrievenceMembers) {
    return this.http.post(this.baseURL, grievenceMembers);
  }

  updateGrievenceMembers(grievenceMembers: GrievenceMembers, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, grievenceMembers);
  }

  deleteGrievenceMembers(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

