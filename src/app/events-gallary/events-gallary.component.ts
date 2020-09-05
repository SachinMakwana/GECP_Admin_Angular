import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-events-gallary',
  templateUrl: './events-gallary.component.html',
  styleUrls: ['./events-gallary.component.css']
})
export class EventsGallaryComponent implements OnInit {
  
  constructor(private _loadSriptService : LoadScriptsService) {
    
  }

  ngOnInit(): void {
    this._loadSriptService.loadDatatbles();
  }
}
