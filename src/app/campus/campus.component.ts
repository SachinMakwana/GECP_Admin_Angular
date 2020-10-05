import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';

import { CampusService } from '../../services/component/campus.service';
import { Campus } from '../../app/models/campus.model';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css'],
  providers: [CampusService]

})
export class CampusComponent implements OnInit {

  campus: Campus;

  constructor(public campusService: CampusService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshCampusList();
  }

  refreshCampusList() {
    this.spinnerService.show();
    this.campusService.getCampusList().subscribe((res) => {
      this.campusService.campus = res as Campus[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblCampus");
      this.spinnerService.hide();
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
        this.campusService.deleteCampus(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblCampus");
          this.refreshCampusList();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }

  onEdit(cam: Campus) {
    this.campusService.selectedCampus = cam;

    this.router.navigateByUrl('/campus/add', { state: this.campusService.selectedCampus });
  }
}
