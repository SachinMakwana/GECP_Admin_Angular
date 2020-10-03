import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { LoadScriptsService } from 'src/services/load-scripts.service';
import { AffiliationService } from 'src/services/component/affiliation.service';
import { Affiliation } from '../models/affiliation.model';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  affiliation : Affiliation;

  constructor(public affiliationService: AffiliationService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.refreshList();
    this.affiliationService.selectedAffiliation = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.affiliationService.getAffiliation().subscribe(res => {
      this.affiliationService.affiliations = res as Affiliation[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblAffiliation");
    });
    this.spinnerService.hide();
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
        this.affiliationService.deleteAffiliation(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblAffiliation");
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


  onEdit(data: Affiliation) {
    this.affiliationService.selectedAffiliation = null;
    this.affiliationService.selectedAffiliation = data;

    this.router.navigateByUrl('/affiliation/add', { state: this.affiliationService.selectedAffiliation });
  }

  onView(_id: number) {
    this.affiliationService.getAffiliationById(_id).subscribe(res => {
      this.affiliationService.selectedAffiliation = res as Affiliation;
    });
  
    this.router.navigateByUrl('/affiliation/view', { state: this.affiliationService.selectedAffiliation });
  }
}
