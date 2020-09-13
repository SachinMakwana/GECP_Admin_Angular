import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgForm } from "@angular/forms";
import { CompanyService } from "../../../services/Components/company.service";
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

  constructor(public companyService: CompanyService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

      console.log(this.router.getCurrentNavigation().extras.state);
      this.company = new Company();
  }


  ngOnInit(): void {
    //console.log(this.companyService.selectedCompany);
    this._loadScript.loadEditorSummernote('txtDescription');
    this.resetForm();
    if(history.state){
      this.company = history.state;
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    //$("#imgLogo").val(null);
    this._loadScript.resetFileInput("imgLogo");
    this.fileLabel = "Choose Image";

    !this.isInit ? this._loadScript.resetSummernote("txtDescription") : null;

    this.company = {
      _id: null,
      name: "",
      description: "",
      logo: ""
    }
    this.isInit = false;

    let HTMLstring = '<div><p>Hello, world</p><p><b>Summernote can insert HTML string<b></p></div>';
    this._loadScript.setSummernoteParseHTML("txtDescription",HTMLstring);
  }

  /*onSubmit(form: NgForm) {
    //console.log(form.value);
    this.companyService.postCompany(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }*/

  /*onSubmit(){
    let code = this._loadScript.getSummernoteCode("txtDescription");
    alert(code);
    console.log(code);
  }*/

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
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }


  onSubmit(form?: NgForm) {
    this.company.logo = this.base64textString[0];
    let code = this._loadScript.getSummernoteCode('txtDescription');

    this.company = {
      _id: null,
      name: this.company.name,
      description: code,
      logo: this.company.logo
    }

    this.companyService.postCompany(this.company).subscribe((res) => {
      alert("Saved Successfully!");
      console.log("Saved");
    });

    this.resetForm(form);
    //this._loadScript.resetSummernote("txtDescription");
    console.log(this.company);
    //console.log(code);
    //console.log(this.company);
    //console.log(JSON.stringify(this.company));
  }
}
