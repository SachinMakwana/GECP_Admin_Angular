import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { WomenDetailService } from "../../../services/component/women-detail.service";
import { WomenDetail } from "../../models/women_detail.model";

@Component({
  selector: 'app-add-women-cell',
  templateUrl: './add-women-cell.component.html',
  styleUrls: ['./add-women-cell.component.css'],
  providers: [WomenDetailService]
})
export class AddWomenCellComponent implements OnInit {
  womendetail: WomenDetail;
  isDescriptionEmpty:boolean;

  constructor(public womenService: WomenDetailService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) {

      console.log(this.router.getCurrentNavigation().extras.state);
      this.womendetail = new WomenDetail();
  }

  ngOnInit(): void {

    this._loadScript.loadEditorSummernote('txtDescription');
    this.resetForm();
    
    if(history.state != undefined){
      this.womendetail = history.state;
      this._loadScript.setSummernoteParseHTML("txtDescription",this.womendetail.women_description)
      
      console.log("Edit");
    }
    else{
      this.womendetail._id = null
      console.log("Add");
    }
   
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.isDescriptionEmpty == true ? this.isDescriptionEmpty=false : null;
    this._loadScript.resetSummernote("txtDescription");

    this.womendetail = {
      _id: null,
      women_description: ""
    }

  }
 
  onSubmit(form?: NgForm) {

    let code = this._loadScript.getSummernoteCode('txtDescription');

    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;


    if(this.isDescriptionEmpty){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    this.womendetail = {
      _id: this.womendetail._id,
      women_description: code
    }

    if(this.womendetail._id  != null){
      this.womenService.updateWomenDetail(this.womendetail,this.womendetail._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        console.log("Updated");
      });
    }
    else{
      //this.womenService.postWomenDetail(this.womendetail).subscribe((res) => {
       this.toastr.info("Please Go back and click on Edit");
      //   console.log("Saved");
       //});
    }

    this.resetForm(form);
  }



}
