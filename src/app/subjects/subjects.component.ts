import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { SubjectService } from '../../services/component/subject.service';
import { Subject } from '../models/subject.model';
import { Router } from '@angular/router'; 
import { NgxSpinnerService } from "ngx-spinner";  

import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [SubjectService]
})
export class SubjectsComponent implements OnInit {
  
  subject:Subject;

  constructor(public subjectService: SubjectService, private chRef: ChangeDetectorRef, 
    private _loadSriptService: LoadScriptsService,private router: Router,
    private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
  
    this.refreshSubjectList();
    this.subjectService.selectedSubject = null;
   
  }
 

 refreshSubjectList(){
  this.SpinnerService.show(); 
   this.subjectService.getSubjectList().subscribe((res)=>{
    this.subjectService.subjects = res as Subject[];
    this.chRef.detectChanges();
    this._loadSriptService.loadDatatbles("tblSubject");
    this.SpinnerService.hide(); 
   });
 }

 onDelete(_id: number){
   Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!'
     }).then((result)=>{
     if(result.isConfirmed){
     this.subjectService.deleteSubject(_id).subscribe((res)=>{
      
       this._loadSriptService.destroyDatatbles("tblSubject");
       this.refreshSubjectList();
       Swal.fire(
         'Deleted',
         'Your record has been deleted',
         'success',
       )
     });
   }
 })
}
 onEdit(_id: number,sub: Subject) {
 
  this.subjectService.selectedSubject = null;
  this.subjectService.selectedSubject = sub;
  
  

  this.router.navigateByUrl('/subjects/add',{ state: this.subjectService.selectedSubject });


  
}

}

