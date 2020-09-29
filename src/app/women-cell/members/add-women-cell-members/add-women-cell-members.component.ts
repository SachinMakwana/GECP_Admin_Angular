import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WomenMemberService } from '../../../../services/component/women-member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WomenMember } from '../../../models/women_member.model';
import { Route } from '@angular/compiler/src/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { ToastMessage } from '../../../common/toastMessages'
import { ToastConstant } from '../../../common/toastConstant'

import { ToastrService } from 'ngx-toastr';      


@Component({
  selector: 'app-add-women-cell-members',
  templateUrl: './add-women-cell-members.component.html',
  styleUrls: ['./add-women-cell-members.component.css'],
  providers: [WomenMemberService]
})
export class AddWomenCellMembersComponent implements OnInit {

  wcmember: WomenMember;
  nameselected: boolean;
  roleselected: boolean;
  deptselected:boolean;
  desigselected:boolean;


  constructor(public wcmemberService: WomenMemberService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,private toastr: ToastrService) {
      console.log(this.router.getCurrentNavigation().extras.state);
      this.wcmember = new WomenMember();
     }

  ngOnInit(): void {
    this.resetForm();

    if(history.state != undefined){
      this.wcmember = history.state;
      this.wcmember._id = this.wcmember._id

    }
    else{
      this.wcmember._id = null
      console.log(this.wcmember._id);
      console.log("Add");
    }
  }

  resetForm(form?: NgForm){
    if (form)
      form.reset();

      this.wcmember = {
          _id: null,
          wc_name: "",
          wc_role: "",
          wc_department: "",
          wc_designation: ""
       

      }
    
  }


  onSubmit(form?: NgForm) {
    //console.log(this.subject);

    
    this.wcmember.wc_name == null ?  this.nameselected = true : this.nameselected = false;
    
    this.wcmember.wc_role == null ?  this.roleselected = true : this.roleselected = false;

    this.wcmember.wc_department == null ?  this.deptselected = true : this.deptselected = false;
    
    this.wcmember.wc_designation == null ?  this.desigselected = true : this.desigselected = false;
    

    if(this.nameselected || this.roleselected || this.desigselected || this.deptselected){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    
    this.wcmember = {
      _id: this.wcmember._id,
      wc_name: this.wcmember.wc_name,
      wc_role: this.wcmember.wc_role,
      wc_designation: this.wcmember.wc_designation,
      wc_department:this.wcmember.wc_department,
   
    }

    if(this.wcmember._id){
      this.wcmemberService.updateWcmember(this.wcmember,this.wcmember._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        console.log("Updated");
      });
    }
    else{
      this.wcmemberService.postWcmember(this.wcmember).subscribe((res) => {
        this.toastr.success(ToastMessage.SaveSuccess,ToastConstant.Success)
        console.log("Saved");
      });
    }

    this.resetForm(form);
   
}
}
