import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-anti-ragging-cell',
  templateUrl: './anti-ragging-cell.component.html',
  styleUrls: ['./anti-ragging-cell.component.css']
})
export class AntiRaggingCellComponent implements OnInit {
  
  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles();
  }
}
