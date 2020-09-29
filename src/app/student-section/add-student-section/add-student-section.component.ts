import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
@Component({
  selector: 'app-add-student-section',
  templateUrl: './add-student-section.component.html',
  styleUrls: ['./add-student-section.component.css']
})
export class AddStudentSectionComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) { }

  ngOnInit(): void {
     this._loadSriptService.loadDatatbles("id");
  }

}
