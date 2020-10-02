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
    private chRef: ChangeDetectorRef,
    private router: Router,private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.refreshAbout();
    this.aboutService.selectedAbout = null;
    
  }

  refreshAbout(){
    this.SpinnerService.show(); 
     this.aboutService.getAbout().subscribe((res)=>{
      this.aboutService.abouts = res as About[];
      this.chRef.detectChanges();
      
    this.SpinnerService.hide(); 
     });
   }

   onEdit(_id: number,ab: About) {
 
    this.aboutService.selectedAbout = null;
    this.aboutService.selectedAbout = ab;
    
    
  
    this.router.navigateByUrl('/aboutCollege/add',{ state: this.aboutService.selectedAbout });
  
  
    
  }
  
}
