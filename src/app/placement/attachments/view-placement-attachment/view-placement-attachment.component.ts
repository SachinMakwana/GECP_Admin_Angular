import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-placement-attachment',
  templateUrl: './view-placement-attachment.component.html',
  styleUrls: ['./view-placement-attachment.component.css']
})
export class ViewPlacementAttachmentComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles("id");
  }
}
