import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubjectService } from '../../../services/component/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from '../../models/subject.model';
import { SubjectsComponent } from '../subjects.component'
import { Route } from '@angular/compiler/src/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { ToastMessage } from '../../common/toastMessages'
import { ToastConstant } from '../../common/toastConstant'

import { ToastrService } from 'ngx-toastr';      
// import { RouterModule, Routes} from '@angular/router';
//declare var M: any;
@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrls: ['./add-subjects.component.css'],
  providers: [SubjectService]
})
export class AddSubjectsComponent implements OnInit {

  
  subject: Subject;
  isInit: boolean = true;
  isEdit:boolean;
  codeSelected : boolean;
  semSelected: boolean;
  deptSelected: boolean;
  nameSelected: boolean;
  knownAsSelected: boolean;

  constructor(public subjectService: SubjectService,
    private _loadScript: LoadScriptsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,private toastr: ToastrService) {

      console.log(this.router.getCurrentNavigation().extras.state);
      this.subject = new Subject();
  }

  ngOnInit(): void {

    this.resetForm();

    if(history.state != undefined){
      this.subject = history.state;
      this.subject._id = this.subject._id
      this.isEdit = true;
      console.log(this.subject._id);
      console.log("Edit");
    }
    else{
      this.subject._id = null
      console.log(this.subject._id);
      console.log("Add");
    }
  
  }
  
  resetForm(form?: NgForm){
    if (form)
      form.reset();

      this.subject = {
          _id: null,
          code: null,
          name: "",
          knownAs: "",
          semester: null,
          deptName: ""
       

      }
      
  }
  
  onSubmit(form?: NgForm) {
    //console.log(this.subject);

    
    this.subject.code == null ?  this.codeSelected = true : this.codeSelected = false;
    
    this.subject.semester == null ?  this.semSelected = true : this.semSelected = false;

    this.subject.deptName == null ?  this.deptSelected = true : this.deptSelected = false;
    
    this.subject.name == null ?  this.nameSelected = true : this.nameSelected = false;
    
    this.subject.knownAs == null ?  this.knownAsSelected = true : this.knownAsSelected = false;

    if(this.codeSelected || this.semSelected || this.deptSelected || this.nameSelected || this.knownAsSelected){
      this.toastr.error("Please Insert Data","Required");
      return;
    }

    
    this.subject = {
      _id: this.subject._id,
      name: this.subject.name,
      code: this.subject.code,
      knownAs: this.subject.knownAs,
      semester:this.subject.semester,
      deptName:this.subject.deptName
    }

    if(this.subject._id){
      this.subjectService.updateSubject(this.subject,this.subject._id).subscribe((res) => {
        this.toastr.success("Information Updated Successfully !", "Updated");
        console.log("Updated");
      });
    }
    else{
      this.subjectService.postSubject(this.subject).subscribe((res) => {
        this.toastr.success(ToastMessage.SaveSuccess,ToastConstant.Success)
        console.log("Saved");
      });
    }

    this.resetForm(form);
    console.log(this.subject);
}
}