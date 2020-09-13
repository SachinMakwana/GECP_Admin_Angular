import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { NgForm } from "@angular/forms";
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { CompanyService } from 'src/services/Components/company.service';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  dynamicArray: Array<Company> = [];

  constructor(public companyService: CompanyService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService) {
      
  }

  ngOnInit(): void {
    this.refreshCompanyList();
  }

  refreshCompanyList() {
    this.companyService.getCompany().subscribe(res => {
      this.companyService.companies = res as Company[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblCompany");
    });
  }

  onDelete(_id: number, form: NgForm, index) {
    if (confirm('Are You Sure To Delete This Record ?') == true) {
      this.companyService.deleteCompany(_id).subscribe((res) => {
        alert("Deleted Successfully!");
        this.chRef.detectChanges();
        //this.refreshCompanyList();
        this.companyService.companies.splice(index, 1);
        //this._loadSriptService.loadDatatbles("tblCampus");
        //this.refreshCompanyList();
        //this.resetForm(form);
      });
    }
  }


}
