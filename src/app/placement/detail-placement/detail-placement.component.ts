import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Placement } from 'src/app/models/placement/placement_details.model';
import { PlacementService } from 'src/services/component/placement/placement_details.service';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-detail-placement',
  templateUrl: './detail-placement.component.html',
  styleUrls: ['./detail-placement.component.css']
})
export class DetailPlacementComponent implements OnInit {

  placement: Placement;

  constructor(public placementService: PlacementService,
    private _loadScript: LoadScriptsService,
    private router: Router,) { 
      this.placement = new Placement();
     }

  ngOnInit(): void {
    if (history.state != undefined) {
      this.placement = null;
      this.placement = history.state;
      //this._loadScript.setSummernoteCode("description",this.placement.description);
    }
  }
}
