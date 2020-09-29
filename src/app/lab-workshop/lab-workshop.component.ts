import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { NgxSpinnerService } from "ngx-spinner";
import { LabAndWorkshopService } from "../../services/component/labAndWorkshop.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { LabAndWorkshop } from "../models/labAndWorkshop.model";
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-workshop',
  templateUrl: './lab-workshop.component.html',
  styleUrls: ['./lab-workshop.component.css']
})
export class LabWorkshopComponent implements OnInit {

  labAndworkshop: LabAndWorkshop;

  constructor(public labAndWorkshopService: LabAndWorkshopService,
    private _loadSriptService: LoadScriptsService,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshList();
    this.labAndWorkshopService.selectedLabAndWorkshop = null;
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.labAndWorkshopService.getLabAndWorkshop().subscribe(res => {
      this.labAndWorkshopService.labAndWorkshops = res as LabAndWorkshop[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblLabAndWorkshop");
      this.spinnerService.hide();
    });
  }
  //end of refreshList

  //deleting data
  onDelete(_id: number) {
    //this.toastr.warning()

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.labAndWorkshopService.deleteLabAndWorkshop(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblLabAndWorkshop");
          this.refreshList();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }
  //end of onDelete


  onEdit(data: LabAndWorkshop) {
    this.labAndWorkshopService.selectedLabAndWorkshop = null;
    this.labAndWorkshopService.selectedLabAndWorkshop = data;

    this.router.navigateByUrl('/labandworkshop/add', { state: this.labAndWorkshopService.selectedLabAndWorkshop });
  }

  onView(data: LabAndWorkshop) {
    this.labAndWorkshopService.selectedLabAndWorkshop = null;
    this.labAndWorkshopService.selectedLabAndWorkshop = data;

    this.router.navigateByUrl('/labandworkshop/details', { state: this.labAndWorkshopService.selectedLabAndWorkshop });
  }


}
