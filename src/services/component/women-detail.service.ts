import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { WomenDetail } from "../../app/models/women_detail.model";

@Injectable({
  providedIn: 'root'
})
export class WomenDetailService {
  selectedWomenDetail: WomenDetail;
  womendetails: WomenDetail[];
  readonly baseURL = 'http://localhost:3000/womendetail';
  constructor(private http: HttpClient) {
    this.selectedWomenDetail = new WomenDetail();
   }

   getWomenDetail() {
    return this.http.get(this.baseURL);
  }

  postWomenDetail(wd: WomenDetail) {
    return this.http.post(this.baseURL, wd);
  }

  updateWomenDetail(wd: WomenDetail, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, wd);
  }

  deleteWomenDetail(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
