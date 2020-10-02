import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { NssService } from "../../../services/component/nss.service";
import { Nss } from "../../models/nss.model";
@Component({
  selector: 'app-add-nss',
  templateUrl: './add-nss.component.html',
  styleUrls: ['./add-nss.component.css'],
  providers: [NssService]
})
export class AddNssComponent implements OnInit {

  fileLabel: string = "Choose File";
  nss: Nss;
  fileSelected:boolean;
  
  

  constructor(public nssService: NssService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) {

      
      this.nss = new Nss();
     }

  ngOnInit(): void {
    this.resetForm();
    
    if(history.state != undefined){
      this.nss = history.state;
      this.fileLabel = "Change File";
      this.fileSelected = true;
    }
    else{
      this.nss._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("filenss");
    this.fileLabel = "Choose File";
    this.fileSelected = false;
    

    this.nss = {
      _id: null,
      nss_title: "",
      nss_fileName: "",
      nss_filePath: "",
      file:""
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
    this.fileLabel = filename;
    this.nss.nss_fileName=filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {
    
    this.nss.file = this.base64textString[0];


    if(!this.fileSelected || !this.nss.nss_title){
      this.toastr.error("Please Insert Data","Required");
      return;
    }
    
    if(this.nss._id  != null){
      if(this.base64textString[0]){
        this.nss.file = this.base64textString[0];
      }
    }
    else{
      this.nss.file = this.base64textString[0];
    }

    this.nss = {
      _id: this.nss._id,
      nss_title: this.nss.nss_title,
      nss_fileName: this.nss.nss_fileName,
      nss_filePath: this.nss.nss_filePath,
      file:this.nss.file
    }

    if(this.nss._id  != null){
      this.nssService.updateNss(this.nss,this.nss._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        
     });
    }
    else{
      this.nssService.postNss(this.nss).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
        
      });
    }

    this.resetForm(form);
  }


}
