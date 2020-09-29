import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';

import { LoadScriptsService } from 'src/services/load-scripts.service';
import { PlacementMembersService } from 'src/services/component/placement/placement_member_details.service';
import { PlacementMembers } from 'src/app/models/placement/placement_memberDetails.model';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-view-placement-member',
  templateUrl: './view-placement-member.component.html',
  styleUrls: ['./view-placement-member.component.css']
})
export class ViewPlacementMemberComponent implements OnInit {
  placementMember : PlacementMembers;

  constructor(public placementMemberService: PlacementMembersService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.placementMemberService.selectedPlacementMembers = null;
    this.refreshList();
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.placementMemberService.getPlacementMembers().subscribe(res => {
      this.placementMemberService.placementMembers = res as PlacementMembers[];
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
        this.placementMemberService.deletePlacementMembers(_id).subscribe((res) => {
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


  onEdit(data: PlacementMembers) {
    this.placementMemberService.selectedPlacementMembers = null;
    this.placementMemberService.selectedPlacementMembers = data;

    this.router.navigateByUrl('/placementcell/add-member', { state: this.placementMemberService.selectedPlacementMembers });
  }

  onView(_id: number) {
    this.placementMemberService.getPlacementMembersById(_id).subscribe(res => {
      this.placementMemberService.selectedPlacementMembers = res as PlacementMembers;
    });
  
    this.router.navigateByUrl('/placementcell/view-member', { state: this.placementMemberService.selectedPlacementMembers });
  }
}
