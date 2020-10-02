import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from 'src/services/load-scripts.service';

import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { NewsService } from "../../../services/component/news.service";
import { News } from "../../models/news.models";
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
  providers: [NewsService]
})
export class AddNewsComponent implements OnInit {

  newsLabel: string = "Choose Image";
  news: News;
  fileSelected:boolean;
  isDescriptionEmpty:boolean;
  nameEntered:boolean;
  e:Event;


  constructor(public newsService: NewsService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) {

      this.news = new News();
     }

  ngOnInit(): void {

    this._loadScript.loadEditorSummernote('txtDescription');
    this.resetForm();
    
    if(history.state != undefined){
      this.news = history.state;
      this._loadScript.setSummernoteParseHTML("txtDescription",this.news.description)
      this.newsLabel = "Change Image";
      this.fileSelected = true;
      

    }
    else{
      this.news._id = null
      
    }
  }

  
  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("imgNews");
    this.newsLabel = "Choose Image";
    this.fileSelected = false;
    this.isDescriptionEmpty == true ? this.isDescriptionEmpty=false : null;
    this.nameEntered = false;

    this._loadScript.resetSummernote("txtDescription");

    this.news = {
      _id: null,
      title: "",
      description: "",
      image: ""
    }
 
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
    this.newsLabel = filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {

    let code = this._loadScript.getSummernoteCode('txtDescription');

    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;
    (this.news.title == null || this.news.title == "") ?  this.nameEntered = true : this.nameEntered = false;


    if(this.isDescriptionEmpty || this.nameEntered || !this.fileSelected){
      this.toastr.error("Please Insert Data","Required");
      return;
    }
    
    if(this.news._id  != null && form != null){
      if(this.base64textString[0]){
        this.news.image = this.base64textString[0];
      }
    }
    else{
      this.news.image = this.base64textString[0];
    }


    if(this.news._id  != null){
      this.newsService.updateNews(this.news,this.news._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
    
      });
    }
    else{
      this.newsService.postNews(this.news).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
    
      });
    }

    this.resetForm(form);
  }


}
