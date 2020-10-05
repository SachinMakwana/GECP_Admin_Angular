import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { AntiRaggingDetails } from "../../../app/models/anti_ragging/anti-ragging_details.model";

@Injectable({
  providedIn: 'root'
})
export class AntiRaggingDetailsService {
  selectedAntiRaggingDetails: AntiRaggingDetails;
  antiRaggingDetails: AntiRaggingDetails[];
  readonly baseURL = 'http://localhost:3000/anti_ragging_details';

  constructor(private http: HttpClient) { 
    this.selectedAntiRaggingDetails = new AntiRaggingDetails();
  }

  getAntiRaggingDetails() {
    return this.http.get(this.baseURL);
  }

  getAntiRaggingDetailsById(_id:number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postAntiRaggingDetails(antiRaggingDetails: AntiRaggingDetails) {
    return this.http.post(this.baseURL, antiRaggingDetails);
  }

  updateAntiRaggingDetails(antiRaggingDetails: AntiRaggingDetails,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, antiRaggingDetails);
  }

  deleteAntiRaggingDetails(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
