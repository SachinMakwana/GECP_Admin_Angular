import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { AntiRaggingMembers } from "../../../app/models/anti_ragging/anti-ragging_memberDetails.model";

@Injectable({
  providedIn: 'root'
})
export class AntiRaggingMembersService {
  selectedAntiRaggingMembers: AntiRaggingMembers;
  antiRaggingMembers: AntiRaggingMembers[];
  readonly baseURL = 'http://localhost:3000/anti_ragging_memberDetails';

  constructor(private http: HttpClient) { 
    this.selectedAntiRaggingMembers = new AntiRaggingMembers();
  }

  getAntiRaggingMembers() {
    return this.http.get(this.baseURL);
  }

  getAntiRaggingMembersById(_id:number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postAntiRaggingMembers(antiRaggingMembers: AntiRaggingMembers) {
    return this.http.post(this.baseURL, antiRaggingMembers);
  }

  updateAntiRaggingMembers(antiRaggingMembers: AntiRaggingMembers,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, antiRaggingMembers);
  }

  deleteAntiRaggingMembers(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
