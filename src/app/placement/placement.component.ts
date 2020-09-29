import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { NgxSpinnerService } from "ngx-spinner";
import { PlacementService } from "../../services/component/placement/placement_details.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Placement } from "../models/placement/placement_details.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {
  
  placement: Placement;

  constructor(public placementService: PlacementService,
    private _loadSriptService: LoadScriptsService,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshList();
    this.placementService.selectedPlacement = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.placementService.getPlacement().subscribe(res => {
      this.placementService.placementDetails = res as Placement[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblPlacement");
      this.spinnerService.hide();
    });
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
        this.placementService.deletePlacement(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblPlacement");
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


  onEdit(data: Placement) {
    this.placementService.selectedPlacement = null;
    this.placementService.selectedPlacement = data;

    this.router.navigateByUrl('/placementcell/add', { state: this.placementService.selectedPlacement });
  }

  onView(data: Placement) {
    this.placementService.selectedPlacement = null;
    this.placementService.selectedPlacement = data;

    this.router.navigateByUrl('/placementcell/details', { state: this.placementService.selectedPlacement });
  }


}
