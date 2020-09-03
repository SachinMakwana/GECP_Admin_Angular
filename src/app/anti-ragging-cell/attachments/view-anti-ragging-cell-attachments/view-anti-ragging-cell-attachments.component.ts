import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-anti-ragging-cell-attachments',
  templateUrl: './view-anti-ragging-cell-attachments.component.html',
  styleUrls: ['./view-anti-ragging-cell-attachments.component.css']
})
export class ViewAntiRaggingCellAttachmentsComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles();
  }

}
