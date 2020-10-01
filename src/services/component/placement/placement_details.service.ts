import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { Placement } from "../../../app/models/placement/placement_details.model";

@Injectable({
  providedIn: 'root'
})
export class PlacementService {
  selectedPlacement: Placement;
  placementDetails: Placement[];
  readonly baseURL = 'http://localhost:3000/placement';

  constructor(private http: HttpClient) { 
    this.selectedPlacement = new Placement();
  }

  getPlacement() {
    return this.http.get(this.baseURL);
  }

  getPlacementById(_id:number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postPlacement(placementDetails: Placement) {
    return this.http.post(this.baseURL, placementDetails);
  }

  updatePlacement(placementDetails: Placement,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, placementDetails);
  }

  deletePlacement(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
