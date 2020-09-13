import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { NgForm } from "@angular/forms";
import { CompanyService } from "../../../services/Components/company.service";

declare var M: any;

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
  providers: [CompanyService]
})

export class AddCompanyComponent implements OnInit {

  constructor(public companyService: CompanyService, private _loadScript: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadScript.loadEditorSummernote();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.companyService.selectedCompany = {
      _id: null,
      name: "",
      description: "",
      logo: ""
    }
  }
  
  onSubmit(form: NgForm) {
    //console.log(form.value);
    this.companyService.postCompany(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }
}
