import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { AntiRaggingDetailsService } from 'src/services/component/anti_ragging/anti_ragging_details.service';
import { AntiRaggingDetails } from '../models/anti_ragging/anti-ragging_details.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-anti-ragging-cell',
  templateUrl: './anti-ragging-cell.component.html',
  styleUrls: ['./anti-ragging-cell.component.css']
})
export class AntiRaggingCellComponent implements OnInit {

  antiRaggingDetails: AntiRaggingDetails;

  constructor(public antiRaggingDetailsService: AntiRaggingDetailsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.antiRaggingDetailsService.selectedAntiRaggingDetails = null;
    this.refreshList();
  }

  //refreshing data
  refreshList() {
    this.spinnerService.show();
    this.antiRaggingDetailsService.getAntiRaggingDetails().subscribe(res => {
      this.antiRaggingDetailsService.antiRaggingDetails = res as AntiRaggingDetails[];
      this.spinnerService.hide();
    });
  }
  //end of refreshList

  onEdit(data: AntiRaggingDetails) {
    this.antiRaggingDetailsService.selectedAntiRaggingDetails = data;
    this.router.navigateByUrl('/antiRaggingcell/add', { state: this.antiRaggingDetailsService.selectedAntiRaggingDetails });
  }
}
