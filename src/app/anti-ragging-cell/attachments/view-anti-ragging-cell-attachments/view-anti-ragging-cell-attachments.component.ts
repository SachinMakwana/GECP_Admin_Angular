import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { LoadScriptsService } from 'src/services/load-scripts.service';
import { AntiRaggingAttachmentService } from 'src/services/component/anti_ragging/anti_ragging_attachment.service';
import { AntiRaggingAttachment } from '../../../models/anti_ragging/anti-ragging_attachments.model';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-view-anti-ragging-cell-attachments',
  templateUrl: './view-anti-ragging-cell-attachments.component.html',
  styleUrls: ['./view-anti-ragging-cell-attachments.component.css']
})
export class ViewAntiRaggingCellAttachmentsComponent implements OnInit {
  antiRaggingAttachment : AntiRaggingAttachment;

  constructor(public antiRaggingAttachmentService: AntiRaggingAttachmentService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.refreshList();
    this.antiRaggingAttachmentService.selectedAntiRaggingAttachment = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.antiRaggingAttachmentService.getAntiRaggingAttachment().subscribe(res => {
      this.antiRaggingAttachmentService.antiRaggingAttachments = res as AntiRaggingAttachment[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblAntiRaggingAttch");
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
        this.antiRaggingAttachmentService.deleteAntiRaggingAttachment(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblAntiRaggingAttch");
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


  onEdit(data: AntiRaggingAttachment) {
    this.antiRaggingAttachmentService.selectedAntiRaggingAttachment = null;
    this.antiRaggingAttachmentService.selectedAntiRaggingAttachment = data;

    this.router.navigateByUrl('/antiRaggingcell/add-attachments', { state: this.antiRaggingAttachmentService.selectedAntiRaggingAttachment });
  }

  onView(_id: number) {
    this.antiRaggingAttachmentService.getAntiRaggingAttachmentById(_id).subscribe(res => {
      this.antiRaggingAttachmentService.selectedAntiRaggingAttachment = res as AntiRaggingAttachment;
    });
  
    this.router.navigateByUrl('/antiRaggingAttachment/view', { state: this.antiRaggingAttachmentService.selectedAntiRaggingAttachment });
  }
}
