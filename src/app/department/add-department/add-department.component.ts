import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { ToastrService } from 'ngx-toastr';

import { DepartmentService } from '../../../services/component/department.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  providers: [DepartmentService]
})

export class AddDepartmentComponent implements OnInit {

  fileLabel: string = "Choose Image";
  fileLabel2: string = "Choose Cover Image";
  department: Department;
  fileSelected: boolean;
  fileSelected2: boolean;
  isDescriptionEmpty: boolean;

  constructor(public departmentService: DepartmentService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) {

    console.log(this.router.getCurrentNavigation().extras.state);
    this.department = new Department();
  }

  ngOnInit(): void {
    this._loadScript.loadEditorSummernote('about');
    this.resetForm();

    if (history.state != undefined) {
      this.department = history.state;
      this._loadScript.setSummernoteParseHTML("about", this.department.about)
      this.fileLabel = "Change Image";
      this.fileSelected = true;
      this.fileLabel2 = "Change Cover Image";
      this.fileSelected2 = true;
      
    }
    else {
      this.department._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("image");
    this.fileLabel = "Choose Image";
    this.fileSelected = false;
    this._loadScript.resetFileInput("coverPhoto");
    this.fileLabel2 = "Change Cover Image";
    this.fileSelected2 = false;
    this.isDescriptionEmpty == true ? this.isDescriptionEmpty = false : null;

    this._loadScript.resetSummernote("about");

    this.department = {
      _id: null,
      code: null,
      name: "",
      image: "",
      about: "",
      ShortName: "",
      coverPhoto: "",
      Intake: null,
      TotalSubject: null
    }
  }

  //for image to base64
  base64textString = [];

  onUploadChange(evt: any) {
    console.log("event entered");
    const file = evt.target.files[0];
    const filename = evt.target.files[0].name;

    if (file) {
      const reader = new FileReader();

      this.base64textString.splice(0, this.base64textString.length);
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    this.fileLabel = filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  base64textString2 = [];
  onUploadChange2(evt: any) {
    console.log("event entered");
    const file2 = evt.target.files[0];
    const filename2 = evt.target.files[0].name;

    if (file2) {
      const reader = new FileReader();

      this.base64textString2.splice(0, this.base64textString2.length);
      reader.onload = this.handleReaderLoaded2.bind(this);
      reader.readAsBinaryString(file2);
    }
    this.fileLabel2 = filename2;
    this.fileSelected2 = true;
  }

  handleReaderLoaded2(e) {
    this.base64textString2.push('data:image/png;base64,' + btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {

    let code = this._loadScript.getSummernoteCode('about');

    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;

    if (this.isDescriptionEmpty || !this.fileSelected||!this.fileSelected2 || !(this.department.code || this.department.name|| this.department.ShortName||this.department.Intake||this.department.TotalSubject)) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }

    if (this.department._id != null) {
      if (this.base64textString[0] && this.base64textString2[0] ) {
        this.department.image = this.base64textString[0];
        this.department.coverPhoto = this.base64textString2[0];
      }
    }
    else {
      this.department.image = this.base64textString[0];
      this.department.coverPhoto = this.base64textString2[0];
    }

    this.department.about = code

    if (this.department._id != null) {
      this.departmentService.updateDepartment(this.department, this.department._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.departmentService.postDepartment(this.department).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}

