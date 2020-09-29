import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { GalleryService } from 'src/services/component/gallery.service';
import { Gallery } from '../models/gallery.model';
import { NgxSpinnerService } from "ngx-spinner";  

import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-events-gallary',
  templateUrl: './events-gallary.component.html',
  styleUrls: ['./events-gallary.component.css'],
  providers: [GalleryService]
})
export class EventsGallaryComponent implements OnInit {

  gallery: Gallery;
  
  constructor(public galleryService: GalleryService,
    private chRef: ChangeDetectorRef,
    private _loadSriptService: LoadScriptsService,
    private router: Router,private SpinnerService: NgxSpinnerService) {
    
  }

  ngOnInit(): void {
    
    this.refreshGalleryList();
    this.galleryService.selectedGallery = null;
    
  }

  refreshGalleryList() {
    this.SpinnerService.show(); 
    this.galleryService.getGalleryList().subscribe(res => {
      this.galleryService.gallerys = res as Gallery[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblGallery");
      this.SpinnerService.hide(); 
    });
  }

  
 onDelete(_id: number){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result)=>{
    if(result.isConfirmed){
    this.galleryService.deleteGallery(_id).subscribe((res)=>{
     
      this._loadSriptService.destroyDatatbles("tblGallery");
      this.refreshGalleryList();
      Swal.fire(
        'Deleted',
        'Your record has been deleted',
        'success',
      )
    });
  }
})
}
  //end of onDelete


  onEdit(_id: number,gal: Gallery) {
    //console.log(_id);
    //console.log(comp);
    this.galleryService.selectedGallery = null;
    this.galleryService.selectedGallery = gal;
    console.log(this.galleryService.selectedGallery);
    
    /*this.companyService.selectedCompany = {
      _id:_id,
      name: comp.name,
      logo: comp.logo,
      description:comp.description
    }*/
    //console.log(comp);
    //console.log(this.companyService.selectedCompany);

    this.router.navigateByUrl('/events/add',{ state: this.galleryService.selectedGallery });
  }
}
