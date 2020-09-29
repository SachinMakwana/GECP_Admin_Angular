import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CampusService } from '../../../services/component/campus.service'
import { NgForm } from '@angular/forms';
import { Campus } from '../../models/campus.model'

@Component({
  selector: 'app-add-campus',
  templateUrl: './add-campus.component.html',
  styleUrls: ['./add-campus.component.css'],
  providers: [CampusService]
})
export class AddCampusComponent implements OnInit {

  fileLabel: string = "Choose File";
  campus: Campus;
  //isInit: boolean = true;
  fileSelected: boolean;
  isDescriptionEmpty: boolean;

  constructor(public campusService: CampusService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) {

    this.campus = new Campus();
  }

  ngOnInit(): void {
    this._loadScript.loadEditorSummernote('txtDescription');
    this.resetForm();

    if (history.state != undefined) {
      this.campus = history.state;
      this._loadScript.setSummernoteParseHTML("txtDescription", this.campus.description)
      this.fileLabel = this.campus.fileName;
      this.fileSelected = true;
    }
    else {
      this.campus._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    //this._loadScript.resetFileInput("image");
    this.fileLabel = "Choose File";
    this.isDescriptionEmpty == true
    this.fileSelected = false;

    this._loadScript.resetSummernote("txtDescription");

    this.campus = {
      _id: null,
      category: "",
      fileName: "",
      description: "",
      filePath: "",
      file: ""
    }
  }

  base64textString = [];


  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    const filename = evt.target.files[0].name;

    if (file) {
      const reader = new FileReader();

      this.base64textString.splice(0, this.base64textString.length);
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }

    this.fileLabel = filename;
    this.campus.fileName = filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {
    let code = this._loadScript.getSummernoteCode('txtDescription');
    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;

    this.campus.file = this.base64textString[0];

    if (this.isDescriptionEmpty || !this.fileSelected) {
      this.toastr.error("Please Insert Data.", "Required");
      return;
    };

    if (this.campus._id != null) {
      if (this.base64textString[0]) {
        this.campus.file = this.base64textString[0];
      }
    }
    else {
      this.campus.file = this.base64textString[0];
    }

    this.campus = {
      _id: this.campus._id,
      category: this.campus.category,
      description: code,
      fileName: this.campus.fileName,
      filePath: this.campus.filePath,
      file: this.campus.file
    }

    if (this.campus._id) {
      this.campusService.updateCampus(this.campus, this.campus._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.campusService.postAddCampus(this.campus).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
    console.log(this.campus);
  }
}
