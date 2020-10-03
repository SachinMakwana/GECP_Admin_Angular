import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';

import { ContactInfoService } from '../../services/component/contactInfo.service';
import { ContactInfo } from '../models/contactInfo.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  providers: [ContactInfoService]

})
export class ContactInfoComponent implements OnInit {

  contactInfo: ContactInfo;

  constructor(private _loadSriptService: LoadScriptsService,
    public contactInfoService: ContactInfoService,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private toastr: ToastrService,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshContactInfo();
  }

  refreshContactInfo() {
    this.spinnerService.show();
    this.contactInfoService.getContactInfo().subscribe((res) => {
      this.contactInfoService.contactInfo = res as ContactInfo[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblContactInfo");
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
        this.contactInfoService.deleteContactInfo(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblContactInfo");
          this.refreshContactInfo();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }

  onEdit(con: ContactInfo) {
    this.contactInfoService.selectedContactInfo = null;
    this.contactInfoService.selectedContactInfo = con;

    this.router.navigateByUrl('/contact-info/add', { state: this.contactInfoService.selectedContactInfo });
  }
}
