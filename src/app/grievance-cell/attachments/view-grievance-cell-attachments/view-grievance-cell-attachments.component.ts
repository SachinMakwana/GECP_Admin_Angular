import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { GrievenceAttachment } from '../../../models/grievence/grievence-attachments.model';
import { GrievenceAttachmentService } from '../../../../services/component/grievence/grievence-attachments.service';

@Component({
  selector: 'app-view-grievance-cell-attachments',
  templateUrl: './view-grievance-cell-attachments.component.html',
  styleUrls: ['./view-grievance-cell-attachments.component.css']
})
export class ViewGrievanceCellAttachmentsComponent implements OnInit {

  grievenceAttachment: GrievenceAttachment;

  constructor(private _loadSriptService: LoadScriptsService,
    public gAttachmentService: GrievenceAttachmentService,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.refreshList();
    this.gAttachmentService.selectedGrievenceAttachment = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.gAttachmentService.getGrievenceAttachment().subscribe(res => {
      this.gAttachmentService.grievenceAttachments = res as GrievenceAttachment[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblGAttachments");
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
        this.gAttachmentService.deleteGrievenceAttachment(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblGAttachments");
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


  onEdit(data: GrievenceAttachment) {
    this.gAttachmentService.selectedGrievenceAttachment = null;
    this.gAttachmentService.selectedGrievenceAttachment = data;

    this.router.navigateByUrl('/grievancecell/add-attachments', { state: this.gAttachmentService.selectedGrievenceAttachment });
  }

  onView(_id: number) {
    this.gAttachmentService.getGrievenceAttachmentById(_id).subscribe(res => {
      this.gAttachmentService.selectedGrievenceAttachment = res as GrievenceAttachment;
    });

    this.router.navigateByUrl('/grievencecell/view-attachments', { state: this.gAttachmentService.selectedGrievenceAttachment });
  }
}


