import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { CompanyService } from 'src/services/component/company.service';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  company: Company;

  constructor(public companyService: CompanyService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.refreshCompanyList();
    this.companyService.selectedCompany = null;
  }

  refreshCompanyList() {
    this.companyService.getCompany().subscribe(res => {
      this.companyService.companies = res as Company[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblCompany");
    });
  }
  //end of refreshCompanyList

  onDelete(_id: number) {
    if (confirm('Are You Sure To Delete This Record ?') == true) {
      this.companyService.deleteCompany(_id).subscribe((res) => {
        alert("Deleted Successfully!");

        this._loadSriptService.destroyDatatbles("tblCompany");
        this.refreshCompanyList();
      });
    }
  }
  //end of onDelete


  onEdit(_id: number,comp: Company) {
    //console.log(_id);
    //console.log(comp);
    this.companyService.selectedCompany = null;
    this.companyService.selectedCompany = comp;
    console.log(this.companyService.selectedCompany);
    
    /*this.companyService.selectedCompany = {
      _id:_id,
      name: comp.name,
      logo: comp.logo,
      description:comp.description
    }*/
    //console.log(comp);
    //console.log(this.companyService.selectedCompany);

    this.router.navigateByUrl('/company/add',{ state: this.companyService.selectedCompany });
  }
}
