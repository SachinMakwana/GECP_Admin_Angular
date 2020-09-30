import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 


import { WomenMember } from '../../app/models/women_member.model';

@Injectable({
  providedIn: 'root'
})
export class WomenMemberService {
  selectedwomenmember: WomenMember;
  womenmembers: WomenMember[];
  readonly baseURL = "http://localhost:3000/wcmember";

  constructor(private http : HttpClient) {
    this.selectedwomenmember= new WomenMember();
   }

   postWcmember(wcm : WomenMember){

    return this.http.post(this.baseURL, wcm );

  }

  getWcmember(){
    return this.http.get(this.baseURL);
  }

  
  updateWcmember(wcm: WomenMember, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, wcm);
  }

  deleteWcmember(_id: number){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
