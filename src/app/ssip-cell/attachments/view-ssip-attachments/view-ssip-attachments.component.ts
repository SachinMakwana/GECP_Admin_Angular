import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { SAttachments } from '../../../models/ssip/s-attachments.model';
import { SAttachmentsService } from '../../../../services/component/ssip/s-attachments.service';

@Component({
  selector: 'app-view-ssip-attachments',
  templateUrl: './view-ssip-attachments.component.html',
  styleUrls: ['./view-ssip-attachments.component.css']
})
export class ViewSsipAttachmentsComponent implements OnInit {
  sAttachments: SAttachments;

  constructor(private _loadSriptService: LoadScriptsService,
    public sAttachmentService: SAttachmentsService,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.refreshList();
    this.sAttachmentService.selectedSAttachments = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.sAttachmentService.getSAttachments().subscribe(res => {
      this.sAttachmentService.sAttachments = res as SAttachments[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblSAttachments");
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
        this.sAttachmentService.deleteSAttachments(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblSAttachments");
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


  onEdit(data: SAttachments) {
    this.sAttachmentService.selectedSAttachments = null;
    this.sAttachmentService.selectedSAttachments = data;

    this.router.navigateByUrl('/ssipcell/add-attachments', { state: this.sAttachmentService.selectedSAttachments });
  }

  onView(_id: number) {
    this.sAttachmentService.getSAttachmentsById(_id).subscribe(res => {
      this.sAttachmentService.selectedSAttachments = res as SAttachments;
    });

    this.router.navigateByUrl('/ssipcell/view-attachments', { state: this.sAttachmentService.selectedSAttachments });
  }
}

