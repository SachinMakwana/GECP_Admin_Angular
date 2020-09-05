import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-add-anti-ragging-cell',
  templateUrl: './add-anti-ragging-cell.component.html',
  styleUrls: ['./add-anti-ragging-cell.component.css']
})
export class AddAntiRaggingCellComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadEditorSummernote();
  }

}
