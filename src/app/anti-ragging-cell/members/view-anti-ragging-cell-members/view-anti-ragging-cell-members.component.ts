import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-anti-ragging-cell-members',
  templateUrl: './view-anti-ragging-cell-members.component.html',
  styleUrls: ['./view-anti-ragging-cell-members.component.css']
})
export class ViewAntiRaggingCellMembersComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles();
  }

}
