import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-view-placement-member',
  templateUrl: './view-placement-member.component.html',
  styleUrls: ['./view-placement-member.component.css']
})
export class ViewPlacementMemberComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles("id");
  }

}
