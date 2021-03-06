import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";
import { PlacementAttachmentService } from "../../../../services/component/placement/placement_attachment.service"
import { PlacementAttachment } from "../../../models/placement/placement_attachments.model";
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-add-placement-attachment',
  templateUrl: './add-placement-attachment.component.html',
  styleUrls: ['./add-placement-attachment.component.css']
})
export class AddPlacementAttachmentComponent implements OnInit {
  fileLabel: string = "Choose File";
  attachment: PlacementAttachment;
  fileSelected:boolean;

  constructor(public attachmentService:PlacementAttachmentService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) { 

      this.attachment = new PlacementAttachment();

     }

  ngOnInit(): void {
    this.resetForm();

    if(history.state != undefined){
      this.attachment = history.state;
      this.fileLabel = this.attachment.fileName;
      this.fileSelected = true;
    }
    else{
      this.attachment._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("file");
    this.fileLabel = "Choose File";
    this.fileSelected = false;
    
    this.attachment = {
      _id: null,
      name: "",
      fileName: "",
      filePath: "",
      file:""
    }
  }

  base64textString = [];

  onUploadChange(evt: any) {
    
    const file = evt.target.files[0];
    const filename = evt.target.files[0].name;

    if (file) {
      const reader = new FileReader();

      this.base64textString.splice(0, this.base64textString.length);
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    
    this.fileLabel = filename;
    this.attachment.fileName = filename;
    this.fileSelected = true;
  }
  
  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {

    if(!this.fileSelected || !this.attachment.name){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    if(this.attachment._id  != null){
      if(this.base64textString[0]){
        this.attachment.file = this.base64textString[0];
      }
    }
    else{
      this.attachment.file = this.base64textString[0];
    }

    if(this.attachment._id  != null){
      this.attachmentService.updatePlacementAttachment(this.attachment,this.attachment._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else{
      this.attachmentService.postPlacementAttachment(this.attachment).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}
