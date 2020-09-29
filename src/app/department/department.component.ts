import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';

import { DepartmentService } from '../../services/component/department.service';
import { Department } from '../../app/models/department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]

})
export class DepartmentComponent implements OnInit {

  constructor(public departmentService: DepartmentService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshDepartment();
  }

  refreshDepartment() {
    this.spinnerService.show();
    this.departmentService.getDepartment().subscribe((res) => {
      this.departmentService.department = res as Department[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblDepartment");
      this.spinnerService.hide();
    });
  }

  onDelete(_id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.departmentService.deleteDepartment(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblDepartment");
          this.refreshDepartment();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }

  onEdit(dept: Department) {
    this.departmentService.selectedDepartment = null;
    this.departmentService.selectedDepartment = dept;
    console.log(this.departmentService.selectedDepartment);

    this.router.navigateByUrl('/department/add', { state: this.departmentService.selectedDepartment });
  }

  onView(dept: Department) {
    this.departmentService.selectedDepartment = null;
    this.departmentService.selectedDepartment = dept;

    this.router.navigateByUrl('/department/view-department', { state: this.departmentService.selectedDepartment });
  }

}
