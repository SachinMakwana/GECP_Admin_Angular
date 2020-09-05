import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-add-women-cell',
  templateUrl: './add-women-cell.component.html',
  styleUrls: ['./add-women-cell.component.css']
})
export class AddWomenCellComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadEditorSummernote();
  }

}
