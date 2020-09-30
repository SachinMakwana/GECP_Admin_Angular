import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Observable,throwError, ObservableInput } from 'rxjs/';
import { catchError, map } from 'rxjs/operators';

import { Subject } from '../../app/models/subject.model';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  selectedSubject: Subject;
  subjects: Subject[];
  readonly baseURL = "http://localhost:3000/subject";

  constructor(private http : HttpClient) {
    this.selectedSubject = new Subject();
   }

  postSubject(sub : Subject){

    return this.http.post(this.baseURL, sub );

  }

  getSubjectList(){
    return this.http.get(this.baseURL);
  }

  // putSubject(sub : Subject){
  //   return this.http.put(this.baseURL + `/${sub._id}`, sub);
  // }

  updateSubject(sub: Subject, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, sub);
  }

  deleteSubject(_id: number){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  // setter(selectedSubject: Subject){
  //   this.selectedSubject=selectedSubject;
  //   console.log(selectedSubject);
  }

