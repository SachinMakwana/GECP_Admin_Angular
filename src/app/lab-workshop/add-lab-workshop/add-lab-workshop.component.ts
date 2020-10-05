import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";
import { LabAndWorkshopService } from "../../../services/component/labAndWorkshop.service";
import { LabAndWorkshop } from "../../models/labAndWorkshop.model";
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-add-lab-workshop',
  templateUrl: './add-lab-workshop.component.html',
  styleUrls: ['./add-lab-workshop.component.css']
})
export class AddLabWorkshopComponent implements OnInit {

  fileLabel: string = "Choose Image";
  labAndWorkshop: LabAndWorkshop;
  fileSelected:boolean;
  isDescriptionEmpty:boolean;

  constructor(public labAndWorkshopService: LabAndWorkshopService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) 
    {
    this.labAndWorkshop = new LabAndWorkshop();
   }

  ngOnInit(): void {
    this._loadScript.loadEditorSummernote('details');
    this.resetForm();

    if(history.state != undefined){
      this.labAndWorkshop = history.state;
      this._loadScript.setSummernoteParseHTML("details",this.labAndWorkshop.description)
      this.fileLabel = "Change Image";
      this.fileSelected = true;
    }
    else{
      this.labAndWorkshop._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("imgLogo");
    this.fileSelected = false;
    this.fileLabel = "Choose Image";
    this.isDescriptionEmpty == true ? this.isDescriptionEmpty=false : null;

    this._loadScript.resetSummernote("details");

    this.labAndWorkshop = {
      _id: null,
      name: "",
      image:"",
      description: "",
      category:"",
      deptCode: null
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

  onSubmit(form?: NgForm) {

    let code = this._loadScript.getSummernoteCode('details');
    
    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;
    this.labAndWorkshop.description = code;
    
    if(this.isDescriptionEmpty || !this.fileSelected || !this.labAndWorkshop.name || !this.labAndWorkshop.deptCode || !this.labAndWorkshop.category){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    if(this.labAndWorkshop._id  != null){
      if(this.base64textString[0]){
        this.labAndWorkshop.image = this.base64textString[0];
      }
    }
    else{
      this.labAndWorkshop.image = this.base64textString[0];
    }

    if(this.labAndWorkshop._id  != null){
      this.labAndWorkshopService.updateLabAndWorkshop(this.labAndWorkshop,this.labAndWorkshop._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else{
      this.labAndWorkshopService.postLabAndWorkshop(this.labAndWorkshop).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }
    this.resetForm(form);
  }

}
