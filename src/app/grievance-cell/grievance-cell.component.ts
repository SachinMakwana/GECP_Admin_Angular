import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-grievance-cell',
  templateUrl: './grievance-cell.component.html',
  styleUrls: ['./grievance-cell.component.css']
})
export class GrievanceCellComponent implements OnInit {
  
  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this._loadSriptService.loadDatatbles("id");
=======
     this._loadSriptService.loadDatatbles("id");
>>>>>>> parent of 6d3346a... deleted for check
  }
}
