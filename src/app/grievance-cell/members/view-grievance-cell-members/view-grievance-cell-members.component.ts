import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-grievance-cell-members',
  templateUrl: './view-grievance-cell-members.component.html',
  styleUrls: ['./view-grievance-cell-members.component.css']
})
export class ViewGrievanceCellMembersComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
     this._loadSriptService.loadDatatbles("id");
  }

}
