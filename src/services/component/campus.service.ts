import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Campus } from '../../app/models/campus.model';

@Injectable({
  providedIn: 'root'
})

export class CampusService {
  selectedCampus: Campus;
  campus: Campus[];
  readonly baseURL = "http://localhost:3000/campus";

  constructor(private http: HttpClient) {
    this.selectedCampus = new Campus();
  }

postAddCampus(cam: Campus) {
    return this.http.post(this.baseURL, cam);
  }

  getCampusList() {
    return this.http.get(this.baseURL);
  }

  getCampusListById(_id: number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  updateCampus(cam: Campus, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, cam);
  }
  deleteCampus(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
