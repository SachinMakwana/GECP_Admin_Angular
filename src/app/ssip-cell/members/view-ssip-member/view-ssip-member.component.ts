import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-ssip-member',
  templateUrl: './view-ssip-member.component.html',
  styleUrls: ['./view-ssip-member.component.css']
})
export class ViewSsipMemberComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
     this._loadSriptService.loadDatatbles("id");
  }

}
