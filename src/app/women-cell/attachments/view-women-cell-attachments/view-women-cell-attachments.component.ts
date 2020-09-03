import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-women-cell-attachments',
  templateUrl: './view-women-cell-attachments.component.html',
  styleUrls: ['./view-women-cell-attachments.component.css']
})
export class ViewWomenCellAttachmentsComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles();
  }

}
