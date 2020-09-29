import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";

import { GrievenceMembers } from '../../../models/grievence/grievence-member.model';
import { GrievenceMemberService } from '../../../../services/component/grievence/grievence-member.service';
@Component({
  selector: 'app-add-grievance-cell-members',
  templateUrl: './add-grievance-cell-members.component.html',
  styleUrls: ['./add-grievance-cell-members.component.css']
})
export class AddGrievanceCellMembersComponent implements OnInit {

  grievenceMembers: GrievenceMembers
  constructor(public grievenceMemberService: GrievenceMemberService,
    private toastr: ToastrService) {

    this.grievenceMembers = new GrievenceMembers();
  }

  ngOnInit(): void {
    this.resetForm();

    if (history.state != undefined) {
      this.grievenceMembers = history.state;
    }
    else {
      this.grievenceMembers._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.grievenceMembers = {
      _id: null,
      name: "",
      role: "",
      designation: "",
      department: ""
    }
  }


  onSubmit(form?: NgForm) {

    if (!this.grievenceMembers.department || !this.grievenceMembers.name || !this.grievenceMembers.designation || !this.grievenceMembers.role) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }

    this.grievenceMembers = {
      _id: this.grievenceMembers._id,
      name: this.grievenceMembers.name,
      department: this.grievenceMembers.department,
      designation: this.grievenceMembers.designation,
      role: this.grievenceMembers.role
    }

    if (this.grievenceMembers._id != null) {
      this.grievenceMemberService.updateGrievenceMembers(this.grievenceMembers, this.grievenceMembers._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.grievenceMemberService.postGrievenceMembers(this.grievenceMembers).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}


