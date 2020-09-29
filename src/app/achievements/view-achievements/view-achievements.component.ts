import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-achievements',
  templateUrl: './view-achievements.component.html',
  styleUrls: ['./view-achievements.component.css']
})
export class ViewAchievementsComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
     this._loadSriptService.loadDatatbles("id");
  }
}
