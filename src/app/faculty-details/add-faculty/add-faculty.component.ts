import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Faculty } from "../../models/faculty";
import { LoadScriptsService } from "../../../services/load-scripts.service";
import { FacultyService } from "../../../services/component/faculty.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  faculty: Faculty;

  constructor(private facultyService: FacultyService,
    private loadScript: LoadScriptsService, 
    private toastr: ToastrService) {
    this.faculty = new Faculty();
  }

  ngOnInit(): void {
    this.resetForm();
    this.loadScript.loadDatePicker("dateofbirth");
    this.loadScript.loadDatePicker("dateofjoining");

    if (history.state != undefined) {
      this.faculty = history.state;
    }
    else {
      this.faculty._id = null
    }
  }


  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.faculty = {
      _id: null,
      prefix: "",
      firstName: "",
      lastName: "",
      surname: "",
      designation: "",
      qualification: "",
      experience: "",
      areaOfInterest: "",
      gender: "",
      dob: "",
      doj: "",
      maritialStatus: "",
      address: "",
      contactNo: null,
      phoneNo: null,
      email: "",
      profileImage: "",
      deptCode: null,
    }
  }

  onSubmit(form?: NgForm) {

    if (!this.faculty.dob || !this.faculty.doj) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }
    
    if (this.faculty._id != null) {
      this.facultyService.updateFaculty(this.faculty, this.faculty._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.facultyService.postFaculty(this.faculty).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}
