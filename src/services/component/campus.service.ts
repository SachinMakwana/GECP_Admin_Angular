import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, ObservableInput } from 'rxjs/';
import { catchError, map } from 'rxjs/operators';
//import { HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise'; 

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
