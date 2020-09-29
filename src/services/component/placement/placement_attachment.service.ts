import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';

import { PlacementAttachment } from "../../../app/models/placement/placement_attachments.model";

@Injectable({
  providedIn: 'root'
})
export class PlacementAttachmentService {
  selectedPlacementAttachment: PlacementAttachment;
  placementAttachments: PlacementAttachment[];
  readonly baseURL = 'http://localhost:3000/placement_attachments';

  constructor(private http: HttpClient) { 
    this.selectedPlacementAttachment = new PlacementAttachment();
  }

  getPlacementAttachment() {
    return this.http.get(this.baseURL);
  }

  getPlacementAttachmentById(_id:number) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postPlacementAttachment(placementAttachment: PlacementAttachment) {
    return this.http.post(this.baseURL, placementAttachment);
  }

  updatePlacementAttachment(placementAttachment: PlacementAttachment,_id: number) {
    return this.http.put(this.baseURL + `/${_id}`, placementAttachment);
  }

  deletePlacementAttachment(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
