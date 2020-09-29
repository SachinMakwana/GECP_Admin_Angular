import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-about-college',
  templateUrl: './about-college.component.html',
  styleUrls: ['./about-college.component.css']
})
export class AboutCollegeComponent implements OnInit {

  constructor(private _loadSriptService: LoadScriptsService) {
  }

  ngOnInit(): void {
     this._loadSriptService.loadDatatbles("id");
  }
}
