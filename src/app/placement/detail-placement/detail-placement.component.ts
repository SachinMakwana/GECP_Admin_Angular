import { Component, OnInit } from '@angular/core';
import { Placement } from 'src/app/models/placement/placement_details.model';
import { PlacementService } from 'src/services/component/placement/placement_details.service';

@Component({
  selector: 'app-detail-placement',
  templateUrl: './detail-placement.component.html',
  styleUrls: ['./detail-placement.component.css']
})
export class DetailPlacementComponent implements OnInit {

  placement: Placement;

  constructor(public placementService: PlacementService) { 
      this.placement = new Placement();
     }

  ngOnInit(): void {
    if (history.state != undefined) {
      this.placement = null;
      this.placement = history.state;
    }
  }
}
