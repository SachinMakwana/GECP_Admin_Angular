import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';

import { AchievementsService } from '../../services/component/achievements.service';
import { Achievements } from '../../app/models/achievements.model';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  providers: [AchievementsService]
})

export class AchievementsComponent implements OnInit {

  constructor(public achievementsService: AchievementsService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshAchievements();
  }

  refreshAchievements() {
    this.spinnerService.show();
    this.achievementsService.getAchievements().subscribe((res) => {
      this.achievementsService.achievements = res as Achievements[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblAchievements");
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
        this.achievementsService.deleteAchievements(_id).subscribe((res) => {
          this._loadSriptService.destroyDatatbles("tblAchievements");
          this.refreshAchievements();
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success',
          )
        });
      }
    })
  }

  onEdit(achieve: Achievements) {
    this.achievementsService.selectedAchievements = null;
    this.achievementsService.selectedAchievements = achieve;

    this.router.navigateByUrl('/achievements/add', { state: this.achievementsService.selectedAchievements });
  }

  onView(_id:number, achieve: Achievements ) {
    this.achievementsService.selectedAchievements = null;
    this.achievementsService.selectedAchievements = achieve;

    this.router.navigateByUrl('/achievements/view', { state: this.achievementsService.selectedAchievements });
  }

}
