import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";
import { PlacementService } from "../../../services/component/placement/placement_details.service";
import { Placement } from "../../models/placement/placement_details.model";
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-add-placement',
  templateUrl: './add-placement.component.html',
  styleUrls: ['./add-placement.component.css']
})
export class AddPlacementComponent implements OnInit {

  placement: Placement;

  constructor(public placementService: PlacementService,
    private loadScript: LoadScriptsService,
    private toastr: ToastrService) 
    {
    this.placement = new Placement();
   }

  ngOnInit(): void {
    this.loadScript.loadDatePicker("dateOfCampus");
    this.resetForm();

    if(history.state != undefined){
      this.placement = history.state;
    }
    else{
      this.placement._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.placement = {
      _id: null,
      companyId:null,
      dateOfCampus:"",
      deptCode:null,
      highestPkg:null,
      lowestPkg:null,
      studentsTaken:null
    }
  }

  onSubmit(form?: NgForm) {

    if(!this.placement.dateOfCampus){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    if(this.placement._id  != null){
      this.placementService.updatePlacement(this.placement,this.placement._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else{
      this.placementService.postPlacement(this.placement).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }
    this.resetForm(form);
  }

}
