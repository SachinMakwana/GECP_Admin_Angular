import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";

import { AffiliationService } from "../../../services/component/affiliation.service";
import { Affiliation } from "../../models/affiliation.model";

@Component({
  selector: 'app-add-affiliation',
  templateUrl: './add-affiliation.component.html',
  styleUrls: ['./add-affiliation.component.css']
})
export class AddAffiliationComponent implements OnInit {

  fileLabel: string = "Choose File";
  affiliation: Affiliation;
  fileSelected:boolean;

  constructor(public affiliationService:AffiliationService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) { 

      this.affiliation = new Affiliation();

     }

  ngOnInit(): void {
    this.resetForm();

    if(history.state != undefined){
      this.affiliation = history.state;
      this.fileLabel = this.affiliation.fileName;
      this.fileSelected = true;
    }
    else{
      this.affiliation._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("file");
    this.fileLabel = "Choose File";
    this.fileSelected = false;
    
    this.affiliation = {
      _id: null,
      name: "",
      fileName: "",
      filePath: "",
      file:""
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
    this.affiliation.fileName = filename;
    this.fileSelected = true;
  }
  
  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {
    this.affiliation.file = this.base64textString[0];

    console.log(this.affiliation);
    if(!this.fileSelected || !this.affiliation.name){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    if(this.affiliation._id  != null){
      if(this.base64textString[0]){
        this.affiliation.file = this.base64textString[0];
      }
    }
    else{
      this.affiliation.file = this.base64textString[0];
    }

    this.affiliation = {
      _id: this.affiliation._id,
      name: this.affiliation.name,
      fileName: this.affiliation.fileName,
      filePath: this.affiliation.filePath,
      file:this.affiliation.file
    }

    if(this.affiliation._id  != null){
      this.affiliationService.updateAffiliation(this.affiliation,this.affiliation._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else{
      this.affiliationService.postAffiliation(this.affiliation).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}
