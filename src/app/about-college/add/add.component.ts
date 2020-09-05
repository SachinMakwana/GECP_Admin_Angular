import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  
   }

  ngOnInit(): void {
    this._loadSriptService.loadEditorSummernote();
  }

}
