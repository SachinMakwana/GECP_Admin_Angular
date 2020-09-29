import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { AboutService } from "../../../services/component/about.service";
import { About } from "../../models/about.models";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AboutService]
})
export class AddComponent implements OnInit {

  
  aboutLabel: string = "Choose Image";
  about: About;
  isInit: boolean = true;
  isEdit:boolean;
  fileSelected:boolean;
  isDescriptionEmpty:boolean
  e:Event;

  constructor(public aboutService: AboutService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private toastr: ToastrService) {

      console.log(this.router.getCurrentNavigation().extras.state);
      this.about = new About();
  
  }

  ngOnInit(): void {

    this._loadScript.loadEditorSummernote('txtDescription');
    this.resetForm();
    
    if(history.state != undefined){
      this.about = history.state;
      this._loadScript.setSummernoteParseHTML("txtDescription",this.about.about_description)
      this.aboutLabel = "Change Image";
      this.fileSelected = true;
      
      console.log("Edit");
    }
    else{
      this.about._id = null
      console.log("Add");
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("aboutImage");
    this.aboutLabel = "Choose Image";
    this.fileSelected = false;
    this.isDescriptionEmpty == true ? this.isDescriptionEmpty=false : null;
    

    this._loadScript.resetSummernote("txtDescription");

    this.about = {
      _id: null,
      about_image: "",
      about_description: ""
    }
    this.isInit = false;
  }

   //for image to base64
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
     this.aboutLabel = filename;
     this.fileSelected = true;
   }
 
   handleReaderLoaded(e) {
     this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
   }

   
  onSubmit(form?: NgForm) {

    let code = this._loadScript.getSummernoteCode('txtDescription');

    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;


    if(this.isDescriptionEmpty || !this.fileSelected){
      this.toastr.error("Please Insert Data","Required");
      return;
    }
    
    if(this.about._id  != null && form != null){
      if(this.base64textString[0]){
        this.about.about_image = this.base64textString[0];
      }
    }
    else{
      this.about.about_image = this.base64textString[0];
    }

    this.about = {
      _id: this.about._id,
      about_image: this.about.about_image,
      about_description: code
    }

    if(this.about._id  != null){
      this.aboutService.updateAbout(this.about,this.about._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        console.log("Updated");
      });
    }
    else{
      // this.aboutService.postAbout(this.about).subscribe((res) => {
       this.toastr.info("Please Go back and click on Edit");
      //   console.log("Saved");
      // });
    }

    this.resetForm(form);
  }

 
}
