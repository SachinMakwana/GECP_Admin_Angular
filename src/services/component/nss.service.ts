import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { Nss } from "../../app/models/nss.model";

@Injectable({
  providedIn: 'root'
})
export class NssService {
  selectedNss: Nss;
  nsss: Nss[];
  readonly baseURL = 'http://localhost:3000/nss';

  constructor(private http: HttpClient) {
    this.selectedNss = new Nss();
   }

   getNss() {
    return this.http.get(this.baseURL);
  }

  getNssById(_id:number){
    return this.http.get(this.baseURL + `/${_id}`)
  }

  postNss(ns: Nss) {
    return this.http.post(this.baseURL, ns);
  }

  updateNss(ns: Nss, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, ns);
  }

  deleteNss(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
