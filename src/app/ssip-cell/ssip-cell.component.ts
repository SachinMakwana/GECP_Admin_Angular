import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-ssip-cell',
  templateUrl: './ssip-cell.component.html',
  styleUrls: ['./ssip-cell.component.css']
})
export class SsipCellComponent implements OnInit {
  
  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles();
  }
}
