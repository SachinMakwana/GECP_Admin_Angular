import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { AntiRaggingMembersService } from 'src/services/component/anti_ragging/anti_ragging_member_details.service';
import { AntiRaggingMembers } from 'src/app/models/anti_ragging/anti-ragging_memberDetails.model';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-view-anti-ragging-cell-members',
  templateUrl: './view-anti-ragging-cell-members.component.html',
  styleUrls: ['./view-anti-ragging-cell-members.component.css']
})
export class ViewAntiRaggingCellMembersComponent implements OnInit {
  antiRaggingMember : AntiRaggingMembers;

  constructor(public antiRaggingMemberService: AntiRaggingMembersService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.refreshList();
    this.antiRaggingMemberService.selectedAntiRaggingMembers = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.antiRaggingMemberService.getAntiRaggingMembers().subscribe(res => {
      this.antiRaggingMemberService.antiRaggingMembers = res as AntiRaggingMembers[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblMembers");
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
        this.antiRaggingMemberService.deleteAntiRaggingMembers(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblMembers");
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


  onEdit(data: AntiRaggingMembers) {
    this.antiRaggingMemberService.selectedAntiRaggingMembers = null;
    this.antiRaggingMemberService.selectedAntiRaggingMembers = data;

    this.router.navigateByUrl('/antiRaggingcell/add-member', { state: this.antiRaggingMemberService.selectedAntiRaggingMembers });
  }

  onView(_id: number) {
    this.antiRaggingMemberService.getAntiRaggingMembersById(_id).subscribe(res => {
      this.antiRaggingMemberService.selectedAntiRaggingMembers = res as AntiRaggingMembers;
    });
  
    this.router.navigateByUrl('/antiRaggingMember/view', { state: this.antiRaggingMemberService.selectedAntiRaggingMembers });
  }
}
