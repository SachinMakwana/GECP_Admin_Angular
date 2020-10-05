import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { SsService } from '../../services/component/ss.service';
import { Ss } from '../models/ss.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css'],
  providers: [SsService]
})
export class StudentSectionComponent implements OnInit {

  ss: Ss;
  viewPdf: boolean;
  constructor(public ssService: SsService, private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService, private router: Router,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.refreshSsList();
    this.ssService.selectedSs = null;

  }


  refreshSsList() {
    this.SpinnerService.show();
    this.ssService.getSs().subscribe((res) => {
      this.ssService.sss = res as Ss[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblSs");
      this.SpinnerService.hide();
    });
  }
  onDelete(_id: number) {
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
        this.ssService.deleteSs(_id).subscribe((res) => {

          this._loadSriptService.destroyDatatbles("tblSs");
          this.refreshSsList();
          Swal.fire(
            'Deleted',
            'Your record has been deleted',
            'success',
          )
        });
      }
    })
  }
  onEdit(_id: number, ss: Ss) {

    this.ssService.selectedSs = null;
    this.ssService.selectedSs = ss;
    this.router.navigateByUrl('/student-section/add', { state: this.ssService.selectedSs });
  }

  onView(_id: number, ss: Ss) {
    this.ssService.getSsById(_id).subscribe(res => {
      this.ssService.selectedSs = res as Ss;
      this.viewPdf = true;
    });

    this.router.navigateByUrl('/student-section/view', { state: this.ssService.selectedSs });
  }
}
