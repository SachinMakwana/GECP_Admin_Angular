import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
@Component({
  selector: 'app-add-achievements',
  templateUrl: './add-achievements.component.html',
  styleUrls: ['./add-achievements.component.css']
})
export class AddAchievementsComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this._loadSriptService.loadEditorSummernote("id");
=======
     this._loadSriptService.loadDatatbles("id");
>>>>>>> parent of 6d3346a... deleted for check
  }

}
