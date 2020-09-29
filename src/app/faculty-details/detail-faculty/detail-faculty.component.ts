import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty';
import { FacultyService } from 'src/services/component/faculty.service';
import { Router } from '@angular/router';
import { DepartmentEnum } from "../../common/departmentEnum";

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css']
})
export class DetailFacultyComponent implements OnInit {

  faculty: Faculty;
  deptEnum:any = DepartmentEnum;
  
  constructor(public facultyService: FacultyService,
    private router: Router) {
    this.faculty = new Faculty();
   }

  ngOnInit(): void {

    if (history.state != undefined) {
      this.faculty = null;
      this.faculty = history.state;
    }

  }

  onEdit(fac: Faculty) {
    this.facultyService.selectedFaculty = null;
    this.facultyService.selectedFaculty = fac;

    this.router.navigateByUrl('/faculty/add', { state: this.facultyService.selectedFaculty });
  }

}
