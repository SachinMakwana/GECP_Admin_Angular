import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { LabAndWorkshop } from "../../app/models/labAndWorkshop.model";

@Injectable({
  providedIn: 'root'
})
export class LabAndWorkshopService {
  selectedLabAndWorkshop: LabAndWorkshop;
  labAndWorkshops: LabAndWorkshop[];
  readonly baseURL = 'http://localhost:3000/labworkshop';

  constructor(private http: HttpClient) { 
    this.selectedLabAndWorkshop = new LabAndWorkshop();
  }

  getLabAndWorkshop() {
    return this.http.get(this.baseURL);
  }

  postLabAndWorkshop(data: LabAndWorkshop) {
    return this.http.post(this.baseURL, data);
  }

  updateLabAndWorkshop(data: LabAndWorkshop,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, data);
  }

  deleteLabAndWorkshop(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
