import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { About } from "../../app/models/about.models";
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  selectedAbout: About;
  abouts: About[];
  readonly baseURL = 'http://localhost:3000/college';

  constructor(private http: HttpClient) {

    this.selectedAbout = new About();

   }
   getAbout() {
    return this.http.get(this.baseURL);
  }

  postAbout(ab: About) {
    return this.http.post(this.baseURL, ab);
  }

  updateAbout(ab: About, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, ab);
  }

  deleteAbout(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
