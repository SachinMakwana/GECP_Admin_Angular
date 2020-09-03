import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-ssip-attachments',
  templateUrl: './view-ssip-attachments.component.html',
  styleUrls: ['./view-ssip-attachments.component.css']
})
export class ViewSsipAttachmentsComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles();
  }

}
