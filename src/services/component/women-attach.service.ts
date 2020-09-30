import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { WomenAttach } from "../.././app/models/womenattach.model";

@Injectable({
  providedIn: 'root'
})
export class WomenAttachService {
  selectedWomenattach: WomenAttach;
  womenattachs: WomenAttach[];
  readonly baseURL = 'http://localhost:3000/womenattach';

  constructor(private http: HttpClient) {
    this.selectedWomenattach = new WomenAttach();
   }

   
   getWomenAttach() {
    return this.http.get(this.baseURL);
  }

  getWomenAttachById(_id:number){
    return this.http.get(this.baseURL + `/${_id}`)
  }

  postWomenAttach(wca: WomenAttach) {
    return this.http.post(this.baseURL, wca);
  }

  updateWomenAttach(wca: WomenAttach, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, wca);
  }

  deleteWomenAttach(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
