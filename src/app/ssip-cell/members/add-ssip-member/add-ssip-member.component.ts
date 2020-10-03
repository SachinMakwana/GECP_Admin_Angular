import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";

import { SMemberDetails } from '../../../models/ssip/s-member-details.model';
import { SMemberDetailsService } from '../../../../services/component/ssip/s-member-details.service';

@Component({
  selector: 'app-add-ssip-member',
  templateUrl: './add-ssip-member.component.html',
  styleUrls: ['./add-ssip-member.component.css']
})
export class AddSsipMemberComponent implements OnInit {

  sMembersDtails: SMemberDetails
  constructor(public sMembersDtailsService: SMemberDetailsService,
    private toastr: ToastrService) {

    this.sMembersDtails = new SMemberDetails();
  }

  ngOnInit(): void {
    this.resetForm();

    if (history.state != undefined) {
      this.sMembersDtails = history.state;
    }
    else {
      this.sMembersDtails._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.sMembersDtails = {
      _id: null,
      name: "",
      role: "",
      designation: "",
      department: ""
    }
  }


  onSubmit(form?: NgForm) {

    if (!this.sMembersDtails.department || !this.sMembersDtails.name || !this.sMembersDtails.designation || !this.sMembersDtails.role) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }

    this.sMembersDtails = {
      _id: this.sMembersDtails._id,
      name: this.sMembersDtails.name,
      department: this.sMembersDtails.department,
      designation: this.sMembersDtails.designation,
      role: this.sMembersDtails.role
    }

    if (this.sMembersDtails._id != null) {
      this.sMembersDtailsService.updateSMemberDetails(this.sMembersDtails, this.sMembersDtails._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.sMembersDtailsService.postSMemberDetails(this.sMembersDtails).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}

