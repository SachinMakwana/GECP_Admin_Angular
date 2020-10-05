import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";
import { AntiRaggingMembersService } from "../../../../services/component/anti_ragging/anti_ragging_member_details.service"
import { AntiRaggingMembers } from "../../../models/anti_ragging/anti-ragging_memberDetails.model";

@Component({
  selector: 'app-add-anti-ragging-cell-members',
  templateUrl: './add-anti-ragging-cell-members.component.html',
  styleUrls: ['./add-anti-ragging-cell-members.component.css']
})
export class AddAntiRaggingCellMembersComponent implements OnInit {
  
  members: AntiRaggingMembers;

  constructor(public membersService:AntiRaggingMembersService,
    private toastr: ToastrService) { 

      this.members = new AntiRaggingMembers();

     }

  ngOnInit(): void {
    this.resetForm();

    if(history.state != undefined){
      this.members = history.state;
    }
    else{
      this.members._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    
    this.members = {
      _id: null,
      name: "",
      role:"",
      designation:"",
      department:""
    }
  }

  
  onSubmit(form?: NgForm) {

    if(!this.members.department || !this.members.name || !this.members.designation || !this.members.role){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    if(this.members._id  != null){
      this.membersService.updateAntiRaggingMembers(this.members,this.members._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else{
      this.membersService.postAntiRaggingMembers(this.members).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}
