import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
@Component({
  selector: 'app-add-nss',
  templateUrl: './add-nss.component.html',
  styleUrls: ['./add-nss.component.css']
})
export class AddNssComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) { }

  ngOnInit(): void {
    this._loadSriptService.loadEditorSummernote("id");
  }

}
