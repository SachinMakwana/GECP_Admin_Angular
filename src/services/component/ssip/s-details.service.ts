import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SDetails } from '../../../app/models/ssip/s_details.model';

@Injectable({
  providedIn: 'root'
})
export class SDetailsService {
selectedSDetails: SDetails;
sDetails: SDetails[];
readonly baseURL = "http://localhost:3000/ssip_details";
  
constructor(private http: HttpClient) { 
 this.selectedSDetails = new SDetails();
}

getSDetails(){
  return this.http.get(this.baseURL);
}

getSDetailsById(_id:number) {
  return this.http.get(this.baseURL + `/${_id}`);
}

postSDetails(sDetails: SDetails) {
  return this.http.post(this.baseURL, sDetails);
}

updateSDetails(sDetails: SDetails,_id: number) {
  return this.http.put(this.baseURL + `/${_id}`, sDetails);
}

deleteSDetails(_id: number) {
  return this.http.delete(this.baseURL + `/${_id}`);
}

}
