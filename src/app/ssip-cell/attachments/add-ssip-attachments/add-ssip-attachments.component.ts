import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from "@angular/forms";
import { LoadScriptsService } from 'src/services/load-scripts.service';

import { SAttachments } from '../../../models/ssip/s-attachments.model';
import { SAttachmentsService } from '../../../../services/component/ssip/s-attachments.service';

@Component({
  selector: 'app-add-ssip-attachments',
  templateUrl: './add-ssip-attachments.component.html',
  styleUrls: ['./add-ssip-attachments.component.css']
})
export class AddSsipAttachmentsComponent implements OnInit {
  fileLabel: string = "Choose File";
  sAttachments: SAttachments;
  fileSelected: boolean;

  constructor(public sattachmentsService: SAttachmentsService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) {

    this.sAttachments = new SAttachments();

  }
  ngOnInit(): void {
    this.resetForm();

    if (history.state != undefined) {
      this.sAttachments = history.state;
      this.fileLabel = this.sAttachments.fileName;
      this.fileSelected = true;
    }
    else {
      this.sAttachments._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("file");
    this.fileLabel = "Choose File";
    this.fileSelected = false;

    this.sAttachments = {
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
    this.sAttachments.fileName = filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {

    if (!this.fileSelected || !this.sAttachments.name) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }

    if (this.sAttachments._id != null) {
      if (this.base64textString[0]) {
        this.sAttachments.file = this.base64textString[0];
      }
    }
    else {
      this.sAttachments.file = this.base64textString[0];
    }

    this.sAttachments = {
      _id: this.sAttachments._id,
      name: this.sAttachments.name,
      fileName: this.sAttachments.fileName,
      filePath: this.sAttachments.filePath,
      file: this.sAttachments.file
    }

    if (this.sAttachments._id != null) {
      this.sattachmentsService.updateSAttachments(this.sAttachments, this.sAttachments._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.sattachmentsService.postSAttachments(this.sAttachments).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}

