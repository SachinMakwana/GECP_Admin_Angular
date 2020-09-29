import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Department } from "../../app/models/department.model"

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  selectedDepartment: Department;
  department: Department[];
  readonly baseURL = 'http://localhost:3000/department';

  constructor(private http: HttpClient) {
    this.selectedDepartment = new Department();
  }

  getDepartment() {
    return this.http.get(this.baseURL);
  }

  postDepartment(department: Department) {
    return this.http.post(this.baseURL, department);
  }

  updateDepartment(department: Department, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, department);
  }

  deleteDepartment(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
