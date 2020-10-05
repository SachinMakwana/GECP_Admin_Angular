import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { Affiliation } from "../../app/models/affiliation.model";

@Injectable({
  providedIn: 'root'
})
export class AffiliationService {
  selectedAffiliation: Affiliation;
  affiliations: Affiliation[];
  readonly baseURL = 'http://localhost:3000/affiliation';

  constructor(private http: HttpClient) { 
    this.selectedAffiliation = new Affiliation();
  }

  getAffiliation() {
    return this.http.get(this.baseURL);
  }

  getAffiliationById(_id:number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postAffiliation(affiliation: Affiliation) {
    return this.http.post(this.baseURL, affiliation);
  }

  updateAffiliation(affiliation: Affiliation,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, affiliation);
  }

  deleteAffiliation(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
