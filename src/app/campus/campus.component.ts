import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {
  
  constructor(private _loadSriptService : LoadScriptsService) {
    this._loadSriptService.loadScripts();
  }

  ngOnInit(): void {
  }
}
