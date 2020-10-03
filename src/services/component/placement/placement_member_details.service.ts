import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { PlacementMembers } from "../../../app/models/placement/placement_memberDetails.model";

@Injectable({
  providedIn: 'root'
})
export class PlacementMembersService {
  selectedPlacementMembers: PlacementMembers;
  placementMembers: PlacementMembers[];
  readonly baseURL = 'http://localhost:3000/placement_memberDetails';

  constructor(private http: HttpClient) { 
    this.selectedPlacementMembers = new PlacementMembers();
  }

  getPlacementMembers() {
    return this.http.get(this.baseURL);
  }

  getPlacementMembersById(_id:number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postPlacementMembers(placementMembers: PlacementMembers) {
    return this.http.post(this.baseURL, placementMembers);
  }

  updatePlacementMembers(placementMembers: PlacementMembers,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, placementMembers);
  }

  deletePlacementMembers(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
