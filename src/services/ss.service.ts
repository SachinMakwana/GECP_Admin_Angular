import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { Ss } from "../../app/models/ss.model";
@Injectable({
  providedIn: 'root'
})
export class SsService {
  selectedSs: Ss;
  sss: Ss[];
  readonly baseURL = 'http://localhost:3000/ss';


  constructor(private http: HttpClient) { 
    this.selectedSs=new Ss();
  }

  getSs() {
    return this.http.get(this.baseURL);
  }

  getSsById(_id:number){
    return this.http.get(this.baseURL + `/${_id}`)
  }

  postSs(ss: Ss) {
    return this.http.post(this.baseURL, ss);
  }

  updateSs(ss: Ss, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, ss);
  }

  deleteSs(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }


}
