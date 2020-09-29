import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { SMemberDetails } from '../../../models/ssip/s-member-details.model';
import { SMemberDetailsService } from '../../../../services/component/ssip/s-member-details.service'

@Component({
  selector: 'app-view-ssip-member',
  templateUrl: './view-ssip-member.component.html',
  styleUrls: ['./view-ssip-member.component.css']
})
export class ViewSsipMemberComponent implements OnInit {
  sMemberDetails: SMemberDetails;

  constructor(public sMemberDetailsSrvice: SMemberDetailsService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshList();
    this.sMemberDetailsSrvice.selectedSDetails = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.sMemberDetailsSrvice.getSMemberDetails().subscribe(res => {
      this.sMemberDetailsSrvice.sMemberDetails = res as SMemberDetails[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblSMembersDetails");
    });
    this.spinnerService.hide();
  }
  //end of refreshList

  //deleting data
  onDelete(_id: number) {
    //this.toastr.warning()

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
        this.sMemberDetailsSrvice.deleteSMemberDetails(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblSMembersDetails");
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


  onEdit(data: SMemberDetails) {
    this.sMemberDetailsSrvice.selectedSDetails = null;
    this.sMemberDetailsSrvice.selectedSDetails = data;

    this.router.navigateByUrl('/ssipcell/add-member', { state: this.sMemberDetailsSrvice.selectedSDetails });
  }

  onView(_id: number) {
    this.sMemberDetailsSrvice.getSMemberDetailsById(_id).subscribe(res => {
      this.sMemberDetailsSrvice.selectedSDetails = res as SMemberDetails;
    });

    this.router.navigateByUrl('/ssipcell/view-member', { state: this.sMemberDetailsSrvice.selectedSDetails });
  }
}

