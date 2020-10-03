import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-add-ssip',
  templateUrl: './add-ssip.component.html',
  styleUrls: ['./add-ssip.component.css']
})
export class AddSsipComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
     this._loadSriptService.loadDatatbles("id");
  }

}
