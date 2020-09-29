import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../../services/component/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  department: Department;

  constructor(public departmentService: DepartmentService,
    private router: Router) {
    this.department = new Department();
  }

  ngOnInit(): void {

    if (history.state != undefined) {
      this.department = null;
      this.department = history.state;
    }
  }

  onEdit(dept: Department) {
    this.departmentService.selectedDepartment = null;
    this.departmentService.selectedDepartment = dept;

    this.router.navigateByUrl('/department/add', { state: this.departmentService.selectedDepartment });
  }

}
