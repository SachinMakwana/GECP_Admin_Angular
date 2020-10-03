import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  
  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this._loadSriptService.loadDatatbles("id");
=======
     this._loadSriptService.loadDatatbles("id");
>>>>>>> parent of 6d3346a... deleted for check
  }
}
