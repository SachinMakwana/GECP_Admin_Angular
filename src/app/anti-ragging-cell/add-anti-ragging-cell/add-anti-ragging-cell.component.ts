import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { AntiRaggingDetailsService } from "../../../services/component/anti_ragging/anti_ragging_details.service";
import { AntiRaggingDetails } from "../../models/anti_ragging/anti-ragging_details.model";

@Component({
  selector: 'app-add-anti-ragging-cell',
  templateUrl: './add-anti-ragging-cell.component.html',
  styleUrls: ['./add-anti-ragging-cell.component.css']
})
export class AddAntiRaggingCellComponent implements OnInit {
  
  antiRaggingDetails: AntiRaggingDetails;
  isDescriptionEmpty:boolean;

  constructor(public antiRaggingService: AntiRaggingDetailsService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) {

      this.antiRaggingDetails = new AntiRaggingDetails();
  }

  ngOnInit(): void {
    this._loadScript.loadEditorSummernote('description');
    this.resetForm();
    
    if(history.state != undefined){
      this.antiRaggingDetails = history.state;
      this._loadScript.setSummernoteParseHTML("description",this.antiRaggingDetails.description)
    }
    else{
      this.antiRaggingDetails._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.isDescriptionEmpty == true ? this.isDescriptionEmpty=false : null;
    this._loadScript.resetSummernote("description");

    this.antiRaggingDetails = {
      _id: null,
      description: ""
    }
  }


  onSubmit() {

    let code = this._loadScript.getSummernoteCode('description');

    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;

    if(this.isDescriptionEmpty){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    this.antiRaggingDetails = {
      _id: this.antiRaggingDetails._id,
      description: code
    }

    if(this.antiRaggingDetails._id  != null){
      this.antiRaggingService.updateAntiRaggingDetails(this.antiRaggingDetails,this.antiRaggingDetails._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else{
      this.antiRaggingService.postAntiRaggingDetails(this.antiRaggingDetails).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm();
  }
}

