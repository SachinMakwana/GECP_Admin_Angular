import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-lab-workshop',
  templateUrl: './lab-workshop.component.html',
  styleUrls: ['./lab-workshop.component.css']
})
export class LabWorkshopComponent implements OnInit {
  
  constructor(private _loadSriptService : LoadScriptsService) {
    this._loadSriptService.loadScripts();
  }

  ngOnInit(): void {
  }
}
