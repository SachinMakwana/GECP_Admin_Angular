import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { GrievenceMembers } from '../../../models/grievence/grievence-member.model';
import { GrievenceMemberService } from '../../../../services/component/grievence/grievence-member.service';

@Component({
  selector: 'app-view-grievance-cell-members',
  templateUrl: './view-grievance-cell-members.component.html',
  styleUrls: ['./view-grievance-cell-members.component.css']
})
export class ViewGrievanceCellMembersComponent implements OnInit {

  grievenceMembers: GrievenceMembers;

  constructor(public grievenceMemberService: GrievenceMemberService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshList();
    this.grievenceMemberService.selectedGrievenceMembers = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.grievenceMemberService.getGrievenceMembers().subscribe(res => {
      this.grievenceMemberService.grievenceMembers = res as GrievenceMembers[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblGMemberDetails");
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
        this.grievenceMemberService.deleteGrievenceMembers(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblGMemberDetails");
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


  onEdit(data: GrievenceMembers) {
    this.grievenceMemberService.selectedGrievenceMembers = null;
    this.grievenceMemberService.selectedGrievenceMembers = data;

    this.router.navigateByUrl('/grievancecell/add-member', { state: this.grievenceMemberService.selectedGrievenceMembers });
  }

  onView(_id: number) {
    this.grievenceMemberService.getGrievenceMembersById(_id).subscribe(res => {
      this.grievenceMemberService.selectedGrievenceMembers = res as GrievenceMembers;
    });

    this.router.navigateByUrl('/grievancecell/view-member', { state: this.grievenceMemberService.selectedGrievenceMembers });
  }
}


