import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { CompanyService } from "../../../services/component/company.service";
import { Company } from "../../models/company.model";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
  providers: [CompanyService]
})

export class AddCompanyComponent implements OnInit {

  fileLabel: string = "Choose Image";
  company: Company;
  isInit: boolean = true;
  isEdit:boolean;
  fileSelected:boolean;
  isDescriptionEmpty:boolean;
  nameEntered:boolean;
  e:Event;

  constructor(public companyService: CompanyService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) {

      console.log(this.router.getCurrentNavigation().extras.state);
      this.company = new Company();
  }


  ngOnInit(): void {
    this._loadScript.loadEditorSummernote('txtDescription');
    this.resetForm();
    
    if(history.state != undefined){
      this.company = history.state;
      this._loadScript.setSummernoteParseHTML("txtDescription",this.company.description)
      this.fileLabel = "Change Image";
      this.fileSelected = true;
      
      console.log("Edit");
    }
    else{
      this.company._id = null
      console.log("Add");
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("imgLogo");
    this.fileLabel = "Choose Image";
    this.fileSelected = false;
    this.isDescriptionEmpty == true ? this.isDescriptionEmpty=false : null;
    this.nameEntered = false;

    this._loadScript.resetSummernote("txtDescription");

    this.company = {
      _id: null,
      name: "",
      description: "",
      logo: ""
    }
    this.isInit = false;
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

    let code = this._loadScript.getSummernoteCode('txtDescription');

    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;
    (this.company.name == null || this.company.name == "") ?  this.nameEntered = true : this.nameEntered = false;


    if(this.isDescriptionEmpty || this.nameEntered || !this.fileSelected){
      this.toastr.error("Please Insert Data","Required");
      return;
    }
    
    if(this.company._id  != null && form != null){
      if(this.base64textString[0]){
        this.company.logo = this.base64textString[0];
      }
    }
    else{
      this.company.logo = this.base64textString[0];
    }

    this.company = {
      _id: this.company._id,
      name: this.company.name,
      description: code,
      logo: this.company.logo
    }

    if(this.company._id  != null){
      this.companyService.updateCompany(this.company,this.company._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        console.log("Updated");
      });
    }
    else{
      this.companyService.postCompany(this.company).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
        console.log("Saved");
      });
    }

    this.resetForm(form);
  }
}
