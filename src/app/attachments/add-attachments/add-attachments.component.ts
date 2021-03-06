import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { AttachmentsService } from '../../../services/component/attachments.service';
import { Attachments } from '../../models/attachments.model';

@Component({
  selector: 'app-add-attachments',
  templateUrl: './add-attachments.component.html',
  styleUrls: ['./add-attachments.component.css'],
  providers: [AttachmentsService]
})
export class AddAttachmentsComponent implements OnInit {

  attachments: Attachments;
  fileLabel: string = "Choose File";
  fileSelected: boolean;
  isDeleted: boolean = false;

  constructor(public attachmentsService: AttachmentsService,
    private toastr: ToastrService) {

    this.attachments = new Attachments();
  }

  ngOnInit(): void {
    this.resetForm();

    if (history.state != undefined) {
      this.attachments = history.state;
      this.fileLabel = this.attachments.fileName;
      this.fileSelected = true;
    }
    else {
      this.attachments._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.fileLabel = "Choose File";
    this.fileSelected = false;

    this.attachments = {
      _id: null,
      name: "",
      isDeleted: false,
      fileName: "",
      filePath: "",
      file: "",
      createdBy: "XYZ",
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
    this.attachments.fileName = filename;
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push(window.btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {
    this.attachments.file = this.base64textString[0];

    if (!this.fileSelected || !this.attachments.name || !this.attachments.fileName) {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }

    if (this.attachments._id != null) {
      if (this.base64textString[0]) {
        this.attachments.file = this.base64textString[0];
      }
    }
    else {
      this.attachments.file = this.base64textString[0];
    }

    if (this.attachments._id) {
      this.attachmentsService.updateAttachments(this.attachments, this.attachments._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.attachmentsService.postAttachments(this.attachments).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}