import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../../../services/component/achievements.service';
import { Router } from '@angular/router';
import { Achievements } from '../../models/achievements.model';

@Component({
  selector: 'app-view-achievements',
  templateUrl: './view-achievements.component.html',
  styleUrls: ['./view-achievements.component.css'],
  providers: [ AchievementsService ]
})
export class ViewAchievementsComponent implements OnInit {

  achievements: Achievements

  constructor(public achievementsService: AchievementsService,
    private router: Router) {
    this.achievements = new Achievements();
  }

  ngOnInit(): void {
    if (history.state != undefined) {
      this.achievements = null;
      this.achievements = history.state;
    }

  }

  onEdit(achieve: Achievements) {
    this.achievementsService.selectedAchievements = null;
    this.achievementsService.selectedAchievements = achieve;

    this.router.navigateByUrl('/achievements/add', { state: this.achievementsService.selectedAchievements });
  }

}
