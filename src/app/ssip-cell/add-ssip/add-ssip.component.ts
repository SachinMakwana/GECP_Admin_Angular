import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";

import { SDetails } from '../../models/ssip/s_details.model';
import { SDetailsService } from '../../../services/component/ssip/s-details.service';

@Component({
  selector: 'app-add-ssip',
  templateUrl: './add-ssip.component.html',
  styleUrls: ['./add-ssip.component.css']
})
export class AddSsipComponent implements OnInit {

  sDetails: SDetails;
  isDescriptionEmpty: boolean;

  constructor(private _loadSriptService: LoadScriptsService,
    private toastr: ToastrService,
    private sDetailsService: SDetailsService) {

    this.sDetails = new SDetails();
  }

  ngOnInit(): void {
    this._loadSriptService.loadEditorSummernote('description');
    this.resetForm();

    if (history.state != undefined) {
      this.sDetails = history.state;
      this._loadSriptService.setSummernoteParseHTML("description", this.sDetails.description)
    }
    else {
      this.sDetails._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.isDescriptionEmpty == true ? this.isDescriptionEmpty = false : null;
    this._loadSriptService.resetSummernote("description");

    this.sDetails = {
      _id: null,
      description: ""
    }
  }


  onSubmit() {

    let code = this._loadSriptService.getSummernoteCode('description');

    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;

    if (this.isDescriptionEmpty) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }

    this.sDetails = {
      _id: this.sDetails._id,
      description: code
    }

    if (this.sDetails._id != null) {
      this.sDetailsService.updateSDetails(this.sDetails, this.sDetails._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.sDetailsService.postSDetails(this.sDetails).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm();
  }
}




