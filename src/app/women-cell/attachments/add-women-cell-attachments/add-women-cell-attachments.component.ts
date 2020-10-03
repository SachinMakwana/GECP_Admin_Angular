import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { WomenAttachService } from "../../../../services/component/women-attach.service";
import { WomenAttach } from "../../../models/womenattach.model";

@Component({
  selector: 'app-add-women-cell-attachments',
  templateUrl: './add-women-cell-attachments.component.html',
  styleUrls: ['./add-women-cell-attachments.component.css'],
  providers: [WomenAttachService]
})
export class AddWomenCellAttachmentsComponent implements OnInit {
  fileLabel: string = "Choose File";
  womenattach: WomenAttach;
  fileSelected:boolean;
  

  constructor(public womenattachService: WomenAttachService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) { 
      this.womenattach = new WomenAttach();
    }

  ngOnInit(): void {
    this.resetForm();
    
    if(history.state != undefined){
      this.womenattach = history.state;
      this.fileLabel = "Change File";
      this.fileSelected = true;
      
      
    }
    else{
      this.womenattach._id = null
     
    }
  }
    resetForm(form?: NgForm) {
      if (form)
        form.reset();
  
      this._loadScript.resetFileInput("file");
      this.fileLabel = "Choose File";
      this.fileSelected = false;
      
  
      this.womenattach = {
        _id: null,
        wca_title: "",
        wca_fileName: "",
        wca_filePath: "",
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
      this.womenattach.wca_fileName=filename;
      this.fileSelected = true;
    }
  
    handleReaderLoaded(e) {
      this.base64textString.push(window.btoa(e.target.result));
    }
    onSubmit(form?: NgForm) {
    
      this.womenattach.file = this.base64textString[0];
  
      console.log(this.womenattach);
  
      if(!this.fileSelected || !this.womenattach.wca_title){
        this.toastr.error("Please Insert Data","Required");
        return;
      }
      
      if(this.womenattach._id  != null){
        if(this.base64textString[0]){
          this.womenattach.file = this.base64textString[0];
        }
      }
      else{
        this.womenattach.file = this.base64textString[0];
      }
  
    
      if(this.womenattach._id  != null){
        this.womenattachService.updateWomenAttach(this.womenattach,this.womenattach._id).subscribe((res) => {
          this.toastr.success("Information Updated Successfully !", "Updated");
    
        });
      }
      else{
        this.womenattachService.postWomenAttach(this.womenattach).subscribe((res) => {
          this.toastr.success("Information Saved Successfully !", "Saved");
         
        });
      }
  
      this.resetForm(form);
    }
  
  
  }


