import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { GalleryService } from "../../../services/component/gallery.service";
import { Gallery } from "../../models/gallery.model";

@Component({
  selector: 'app-add-events-gallary',
  templateUrl: './add-events-gallary.component.html',
  styleUrls: ['./add-events-gallary.component.css'],
  providers: [GalleryService]
})
export class AddEventsGallaryComponent implements OnInit {

  eventLabel: string = "Choose Image";
  images = [];
  gallery: Gallery;
  isInit: boolean = true;
  isEdit:boolean;
  fileSelected:boolean;
  categorySelect:boolean;
  
  e:Event;

  constructor(public galleryService: GalleryService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) { 

      console.log(this.router.getCurrentNavigation().extras.state);
      this.gallery = new Gallery();
    }

  ngOnInit(): void {
    this.resetForm();

    if(history.state != undefined){
      this.gallery = history.state;
      this.eventLabel = "Change Image";
      this.fileSelected = true;
      
      console.log("Edit");
    }
    else{
      this.gallery._id = null
      console.log("Add");
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("eventImg");
    this.eventLabel = "Choose Image";
    this.fileSelected = false;
    this.categorySelect = false;


    this.gallery = {
      _id: null,
      title: "",
      image: ""
    }
    this.isInit = false;
  }

  base64textString = [];

  onUploadChange(evt: any) {
    console.log("event entered");
    const file = evt.target.files[0];
    const filename = evt.target.files[0].name;

    if (file) {
      const reader = new FileReader();

      this.base64textString.splice(0, this.base64textString.length);
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    this.eventLabel = filename;
    this.fileSelected = true;
  }


  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  
  onSubmit(form?: NgForm) {

    this.categorySelect == null ?  this.categorySelect = true : this.categorySelect = false;


    if(this.categorySelect || !this.fileSelected){
      this.toastr.error("Please Insert Data","Required");
      return;
    }
    
    if(this.gallery._id  != null && form != null){
      if(this.base64textString[0]){
        this.gallery.image = this.base64textString[0];
      }
    }
    else{
      this.gallery.image = this.base64textString[0];
    }

    this.gallery = {
      _id: this.gallery._id,
      title: this.gallery.title,
      image: this.gallery.image
    }

    if(this.gallery._id  != null){
      this.galleryService.updateGallery(this.gallery,this.gallery._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        console.log("Updated");
      });
    }
    else{
      this.galleryService.postGallery(this.gallery).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
        console.log("Saved");
      });
    }

    this.resetForm(form);
  }


}
