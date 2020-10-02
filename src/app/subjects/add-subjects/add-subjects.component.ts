import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubjectService } from '../../../services/component/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from '../../models/subject.model';
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
 

  constructor(public subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,private toastr: ToastrService) {

      this.subject = new Subject();
  }

  ngOnInit(): void {

    this.resetForm();

    if(history.state != undefined){
      this.subject = history.state;
      this.subject._id = this.subject._id
  
    }
    else{
      this.subject._id = null
     
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