import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';

import { LoadScriptsService } from 'src/services/load-scripts.service';
import { CompanyService } from 'src/services/component/company.service';
import { Company } from '../models/company.model';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshList();
    this.companyService.selectedCompany = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.companyService.getCompany().subscribe(res => {
      this.companyService.companies = res as Company[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblCompany");
      this.spinnerService.hide();
    });
  }
  //end of refreshList

  //deleting data
  onDelete(_id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.companyService.deleteCompany(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblCompany");
          this.refreshList();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }
  //end of onDelete


  onEdit(comp: Company) {
    this.companyService.selectedCompany = null;
    this.companyService.selectedCompany = comp;

    this.router.navigateByUrl('/company/add', { state: this.companyService.selectedCompany });
  }
}
