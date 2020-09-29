import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-nss',
  templateUrl: './nss.component.html',
  styleUrls: ['./nss.component.css']
})
export class NssComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) { }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles("id");
  }

}
