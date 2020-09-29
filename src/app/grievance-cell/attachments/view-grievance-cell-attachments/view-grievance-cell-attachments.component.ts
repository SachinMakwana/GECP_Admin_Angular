import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-grievance-cell-attachments',
  templateUrl: './view-grievance-cell-attachments.component.html',
  styleUrls: ['./view-grievance-cell-attachments.component.css']
})
export class ViewGrievanceCellAttachmentsComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
     this._loadSriptService.loadDatatbles("id");
  }

}
