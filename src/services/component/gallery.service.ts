import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Observable,throwError, ObservableInput } from 'rxjs/';
import { catchError, map } from 'rxjs/operators';

import { Gallery } from '../../app/models/gallery.model';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  selectedGallery: Gallery;
  gallerys: Gallery[];
  readonly baseURL = "http://localhost:3000/gallery";

  constructor(private http : HttpClient) { 
    
    this.selectedGallery = new Gallery();
  }

  postGallery(gal : Gallery){

    return this.http.post(this.baseURL, gal );

  }

  getGalleryList(){
    return this.http.get(this.baseURL);
  }

  updateGallery(gal: Gallery, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, gal);
  }
  deleteGallery(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
