import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Observable,throwError, ObservableInput } from 'rxjs/';
import { catchError, map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Company } from "../../app/models/company.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  selectedCompany: Company;
  companies: Company[];
  readonly baseURL = 'http://localhost:3000/company';
  errorMgmt: (err: any, caught: Observable<any>) => ObservableInput<any>;

  constructor(private http: HttpClient) { }

// Create
createCompany(data): Observable<any> {
  //let url = '${this.basURL}';
  return this.http.post(this.baseURL, data)
    .pipe(
      catchError(this.errorMgmt)
    )}

  getCompany() {
    return this.http.get(this.baseURL);
  }

  postCompany(cmp: Company) {
    return this.http.post(this.baseURL, cmp);
  }

  deleteCompany(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
