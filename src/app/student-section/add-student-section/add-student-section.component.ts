import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { SsService } from "../../../services/component/ss.service";
import { Ss } from "../../models/ss.model";
@Component({
  selector: 'app-add-student-section',
  templateUrl: './add-student-section.component.html',
  styleUrls: ['./add-student-section.component.css'],
  providers: [SsService]
})
export class AddStudentSectionComponent implements OnInit {

  fileLabel: string = "Choose File";
  ss: Ss;
  fileSelected:boolean;

  constructor(public ssService: SsService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) { 
      this.ss = new Ss();
    }

  ngOnInit(): void {
    this.resetForm();
    
    if(history.state != undefined){
      this.ss = history.state;
      this.fileLabel = "Change File";
      this.fileSelected = true;
      
      console.log("Edit");
    }
    else{
      this.ss._id = null
      console.log("Add");
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("file");
    this.fileLabel = "Choose File";
    this.fileSelected = false;
    

    this.ss = {
      _id: null,
      ss_title: "",
      ss_fileName: "",
      ss_filePath: "",
      file:""
    }
  }
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
    this.ss.ss_fileName=filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {
    
    this.ss.file = this.base64textString[0];

    console.log(this.ss);

    if(!this.fileSelected || !this.ss.ss_title){
      this.toastr.error("Please Insert Data","Required");
      return;
    }
    
    if(this.ss._id  != null){
      if(this.base64textString[0]){
        this.ss.file = this.base64textString[0];
      }
    }
    else{
      this.ss.file = this.base64textString[0];
    }

    this.ss = {
      _id: this.ss._id,
      ss_title: this.ss.ss_title,
      ss_fileName: this.ss.ss_fileName,
      ss_filePath: this.ss.ss_filePath,
      file:this.ss.file
    }

    if(this.ss._id  != null){
      this.ssService.updateSs(this.ss,this.ss._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        console.log("Updated");
      });
    }
    else{
      this.ssService.postSs(this.ss).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
        console.log("Saved");
      });
    }

    this.resetForm(form);
  }



}
