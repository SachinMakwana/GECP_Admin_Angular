import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";

import { PlacementMembersService } from "src/services/component/placement/placement_member_details.service"
import { PlacementMembers } from "src/app/models/placement/placement_memberDetails.model";

@Component({
  selector: 'app-add-placement-member',
  templateUrl: './add-placement-member.component.html',
  styleUrls: ['./add-placement-member.component.css']
})
export class AddPlacementMemberComponent implements OnInit {
  
  members: PlacementMembers;

  constructor(public membersService:PlacementMembersService,
    private toastr: ToastrService) { 

      this.members = new PlacementMembers();

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

    this.members = {
      _id: this.members._id,
      name: this.members.name,
      department: this.members.department,
      designation: this.members.designation,
      role: this.members.role
    }

    if(this.members._id  != null){
      this.membersService.updatePlacementMembers(this.members,this.members._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else{
      this.membersService.postPlacementMembers(this.members).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}
