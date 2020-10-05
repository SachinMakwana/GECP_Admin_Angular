import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FacultyService } from 'src/services/component/faculty.service';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Faculty } from '../models/faculty';
import { DepartmentEnum } from "../common/departmentEnum";

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {

  faculty: Faculty;
  deptEnum:any= DepartmentEnum;

  constructor(public facultyService: FacultyService, 
    private _loadSriptService: LoadScriptsService,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshList();
    this.facultyService.selectedFaculty = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.facultyService.getFaculty().subscribe(res => {
      this.facultyService.faculties = res as Faculty[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblFaculty");
      this.spinnerService.hide();
    });
  }
  //end of refreshList


  //deleting data
  onDelete(_id: number) {
    //this.toastr.warning()

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
        this.facultyService.deleteFaculty(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblFaculty");
          this.refreshList();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }
  //end of onDelete

  onEdit(fac: Faculty) {
    this.facultyService.selectedFaculty = null;
    this.facultyService.selectedFaculty = fac;

    this.router.navigateByUrl('/faculty/add', { state: this.facultyService.selectedFaculty });
  }

  onView(fac: Faculty) {
    this.facultyService.selectedFaculty = null;
    this.facultyService.selectedFaculty = fac;

    this.router.navigateByUrl('/faculty/details', { state: this.facultyService.selectedFaculty });
  }
}
