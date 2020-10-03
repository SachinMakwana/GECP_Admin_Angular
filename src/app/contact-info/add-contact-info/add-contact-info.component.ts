import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ContactInfoService } from '../../../services/component/contactInfo.service';
import { NgForm } from '@angular/forms';
import { ContactInfo } from '../../models/contactInfo.model';

@Component({
  selector: 'app-add-contact-info',
  templateUrl: './add-contact-info.component.html',
  styleUrls: ['./add-contact-info.component.css'],
  providers: [ContactInfoService]

})
export class AddContactInfoComponent implements OnInit {

  contactInfo: ContactInfo;
  isCheckValid: boolean;

  constructor(public contactInfoService: ContactInfoService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) {

    this.contactInfo = new ContactInfo();
  }

  ngOnInit(): void {
    this.resetForm();

    if (history.state != undefined) {
      this.contactInfo = history.state;
    }
    else {
      this.contactInfo._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.contactInfo = {
      _id: null,
      email: "",
      phoneNo: null,
      address: ""
    }
  }

  onSubmit(form?: NgForm) {
    if (!(this.contactInfo.email || this.contactInfo.phoneNo || this.contactInfo.address)) {
      this.toastr.error("Please Insert Data.", "Required!");
      return;
    };

    this.contactInfo = {
      _id: this.contactInfo._id,
      email: this.contactInfo.email,
      phoneNo: this.contactInfo.phoneNo,
      address: this.contactInfo.address
    }

    if (this.contactInfo._id != null) {
      this.contactInfoService.updateContactInfo(this.contactInfo, this.contactInfo._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.contactInfoService.postContactInfo(this.contactInfo).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }

}
