import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Faculty } from "../../app/models/faculty";

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  selectedFaculty: Faculty;
  faculties: Faculty[];
  readonly baseURL = 'http://localhost:3000/faculty';

  constructor(private http: HttpClient) {
    this.selectedFaculty = new Faculty();
  }

  getFaculty() {
    return this.http.get(this.baseURL);
  }

  postFaculty(faculty: Faculty) {
    return this.http.post(this.baseURL, faculty);
  }

  updateFaculty(faculty: Faculty, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, faculty);
  }

  deleteFaculty(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
