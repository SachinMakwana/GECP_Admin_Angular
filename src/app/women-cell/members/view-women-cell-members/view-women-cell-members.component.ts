import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-women-cell-members',
  templateUrl: './view-women-cell-members.component.html',
  styleUrls: ['./view-women-cell-members.component.css']
})
export class ViewWomenCellMembersComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles("id");
  }
}
