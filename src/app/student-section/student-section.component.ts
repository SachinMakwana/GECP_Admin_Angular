import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) { }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles("id");
  }

}
