import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';

import { AttachmentsService } from '../../services/component/attachments.service';
import { Attachments } from '../../app/models/attachments.model';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css'],
  providers: [AttachmentsService]
})
export class AttachmentsComponent implements OnInit {

  attachments: Attachments;
  viewPdf: boolean;

  constructor(public attachmentsService: AttachmentsService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshAttachments();
    this.attachmentsService.selectedAttachments = null;
  }

  refreshAttachments() {
    this.spinnerService.show();
    this.attachmentsService.getAttachments().subscribe((res) => {
      this.attachmentsService.attachments = res as Attachments[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblAttachments");

      this.spinnerService.hide();
    });
  }

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
        this.attachmentsService.deleteAttachments(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblAttachments");
          this.refreshAttachments();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }

  onEdit(data: Attachments) {
    this.attachmentsService.selectedAttachments = null;
    this.attachmentsService.selectedAttachments = data;
    //console.log(this.attachmentsService.selectedAttachments);

    this.router.navigateByUrl('/attachments/add', { state: this.attachmentsService.selectedAttachments });
  }
}

