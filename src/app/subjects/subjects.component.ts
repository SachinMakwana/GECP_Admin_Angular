import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  
  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles("id");
  }
}
