import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import { SDetails } from '../models/ssip/s_details.model';
import { SDetailsService } from '../../services/component/ssip/s-details.service';

@Component({
  selector: 'app-ssip-cell',
  templateUrl: './ssip-cell.component.html',
  styleUrls: ['./ssip-cell.component.css']
})
export class SsipCellComponent implements OnInit {
  sDetails: SDetails;

  constructor(public sDetailsService: SDetailsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.sDetailsService.selectedSDetails = null;
    this.refreshList();
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.sDetailsService.getSDetails().subscribe(res => {
      this.sDetailsService.sDetails = res as SDetails[];
      this.spinnerService.hide();
    });
  }
  //end of refreshList

  onEdit(data: SDetails) {
    this.sDetailsService.selectedSDetails = data;
    console.log(this.sDetailsService.selectedSDetails);

    this.router.navigateByUrl('/ssipcell/add', { state: this.sDetailsService.selectedSDetails });
  }
}