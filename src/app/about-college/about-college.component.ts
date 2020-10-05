import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from 'src/services/component/about.service';
import { About } from '../models/about.models';
import { NgxSpinnerService } from "ngx-spinner";  


@Component({
  selector: 'app-about-college',
  templateUrl: './about-college.component.html',
  styleUrls: ['./about-college.component.css'],
  providers: [AboutService]
})
export class AboutCollegeComponent implements OnInit {

  about: About;

  constructor(public aboutService: AboutService,
    private router: Router,private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.refreshAbout();
    
  }

  refreshAbout(){
    this.SpinnerService.show(); 
     this.aboutService.getAbout().subscribe((res)=>{
      this.aboutService.abouts = res as About[];
      
    this.SpinnerService.hide(); 
     });
   }

   onEdit(ab: About) {
 
    
    this.aboutService.selectedAbout = ab;
    
    
  
    this.router.navigateByUrl('/aboutCollege/add',{ state: this.aboutService.selectedAbout });
  
  
    
  }
  
}
