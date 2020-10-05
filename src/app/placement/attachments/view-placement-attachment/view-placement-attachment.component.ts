import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { PlacementAttachmentService } from 'src/services/component/placement/placement_attachment.service';
import { PlacementAttachment } from '../../../models/placement/placement_attachments.model';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-view-placement-attachment',
  templateUrl: './view-placement-attachment.component.html',
  styleUrls: ['./view-placement-attachment.component.css']
})
export class ViewPlacementAttachmentComponent implements OnInit {
  placementAttachment : PlacementAttachment;

  constructor(public placementAttachmentService: PlacementAttachmentService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.refreshList();
    this.placementAttachmentService.selectedPlacementAttachment = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.placementAttachmentService.getPlacementAttachment().subscribe(res => {
      this.placementAttachmentService.placementAttachments = res as PlacementAttachment[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblPlacement");
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
        this.placementAttachmentService.deletePlacementAttachment(_id).subscribe((res) => {
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


  onEdit(data: PlacementAttachment) {
    this.placementAttachmentService.selectedPlacementAttachment = null;
    this.placementAttachmentService.selectedPlacementAttachment = data;

    this.router.navigateByUrl('/placementcell/add-attachment', { state: this.placementAttachmentService.selectedPlacementAttachment });
  }

  onView(_id: number) {
    this.placementAttachmentService.getPlacementAttachmentById(_id).subscribe(res => {
      this.placementAttachmentService.selectedPlacementAttachment = res as PlacementAttachment;
    });
  
    this.router.navigateByUrl('/placementAttachment/view', { state: this.placementAttachmentService.selectedPlacementAttachment });
  }
}
