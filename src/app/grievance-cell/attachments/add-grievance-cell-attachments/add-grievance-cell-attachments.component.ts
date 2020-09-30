import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { GrievenceAttachment } from '../../../models/grievence/grievence-attachments.model';
import { GrievenceAttachmentService } from '../../../../services/component/grievence/grievence-attachments.service';

@Component({
  selector: 'app-add-grievance-cell-attachments',
  templateUrl: './add-grievance-cell-attachments.component.html',
  styleUrls: ['./add-grievance-cell-attachments.component.css']
})
export class AddGrievanceCellAttachmentsComponent implements OnInit {

  fileLabel: string = "Choose File";
  grievenceAttachment: GrievenceAttachment;
  fileSelected: boolean;

  constructor(public gAttachmentService: GrievenceAttachmentService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) {

    this.grievenceAttachment = new GrievenceAttachment();

  }
  ngOnInit(): void {
    this.resetForm();

    if (history.state != undefined) {
      this.grievenceAttachment = history.state;
      this.fileLabel = this.grievenceAttachment.fileName;
      this.fileSelected = true;
    }
    else {
      this.grievenceAttachment._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("file");
    this.fileLabel = "Choose File";
    this.fileSelected = false;

    this.grievenceAttachment = {
      _id: null,
      name: "",
      fileName: "",
      filePath: "",
      file: ""
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
    this.grievenceAttachment.fileName = filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {

    if (!this.fileSelected) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }

    if (this.grievenceAttachment._id != null) {
      if (this.base64textString[0]) {
        this.grievenceAttachment.file = this.base64textString[0];
      }
    }
    else {
      this.grievenceAttachment.file = this.base64textString[0];
    }

    this.grievenceAttachment = {
      _id: this.grievenceAttachment._id,
      name: this.grievenceAttachment.name,
      fileName: this.grievenceAttachment.fileName,
      filePath: this.grievenceAttachment.filePath,
      file: this.grievenceAttachment.file
    }

    if (this.grievenceAttachment._id != null) {
      this.gAttachmentService.updateGrievenceAttachment(this.grievenceAttachment, this.grievenceAttachment._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.gAttachmentService.postGrievenceAttachment(this.grievenceAttachment).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}


