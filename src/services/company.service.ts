import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Observable,throwError, ObservableInput } from 'rxjs/';
import { catchError, map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Company } from "src/app/models/company.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  selectedCompany: Company;
  companies: Company[];
  readonly baseURL = 'http://localhost:3000/company';

  constructor(private http: HttpClient) { 
    this.selectedCompany = new Company();
  }

  getCompany() {
    return this.http.get(this.baseURL);
  }

  getCompanyById(_id: number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postCompany(cmp: Company) {
    return this.http.post(this.baseURL, cmp);
  }

  updateCompany(cmp: Company,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, cmp);
  }

  deleteCompany(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
