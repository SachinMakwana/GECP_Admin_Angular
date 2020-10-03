import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { AchievementsService } from '../../../services/component/achievements.service';
import { Achievements } from '../../models/achievements.model';

@Component({
  selector: 'app-add-achievements',
  templateUrl: './add-achievements.component.html',
  styleUrls: ['./add-achievements.component.css'],
  providers: [AchievementsService]
})

export class AddAchievementsComponent implements OnInit {

  fileLabel: string = "Choose Image";
  achievements: Achievements;
  fileSelected: boolean;
  isDescriptionEmpty: boolean;

  constructor(public achievementsService: AchievementsService,
    private _loadScript: LoadScriptsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this._loadScript.loadEditorSummernote('description');
    this.resetForm();

    if (history.state != undefined) {
      this.achievements = history.state;
      this._loadScript.setSummernoteParseHTML("description", this.achievements.description)
      this.fileLabel = "Change Image";
    }
    else {
      this.achievements._id = null
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this._loadScript.resetFileInput("image");
    this.fileLabel = "Choose Image";
    this.isDescriptionEmpty == true
    this.fileSelected = false;

    this._loadScript.resetSummernote("description");

    this.achievements = {
      _id: null,
      title: "",
      category: "",
      image: "",
      description: ""
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
    this.fileSelected = true;
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  onSubmit(form?: NgForm) {
    let code = this._loadScript.getSummernoteCode('description');
    code == "" ? this.isDescriptionEmpty = true : this.isDescriptionEmpty = false;

    if (this.isDescriptionEmpty || !this.fileSelected) {
      this.toastr.error("Please Insert Data.", "Required");
      return;
    };

    if (this.achievements._id != null) {
      if (this.base64textString[0]) {
        this.achievements.image = this.base64textString[0];
      }
    }
    else {
      this.achievements.image = this.base64textString[0];
    }

    this.achievements = {
      _id: this.achievements._id,
      title: this.achievements.title,
      category: this.achievements.category,
      description: code,
      image: this.achievements.image
    }

    if (this.achievements._id) {
      this.achievementsService.updateAchievements(this.achievements, this.achievements._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
      });
    }
    else {
      this.achievementsService.postAchievements(this.achievements).subscribe((res) => {
        this.toastr.success("Information Saved Successfully !", "Saved");
      });
    }

    this.resetForm(form);
  }
}

