import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { AboutService } from 'src/services/component/about.service';
import { About } from '../models/about.models';
import { NgxSpinnerService } from "ngx-spinner";  

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-about-college',
  templateUrl: './about-college.component.html',
  styleUrls: ['./about-college.component.css'],
  providers: [AboutService]
})
export class AboutCollegeComponent implements OnInit {

  about: About;

  constructor(public aboutService: AboutService,
    private chRef: ChangeDetectorRef, private _loadScript: LoadScriptsService,
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
      // var plain_text = htmlToPlaintext( "hy" );
      this.chRef.detectChanges();
      
      // this._loadScript.setSummernoteParseHTML("txtDescription",this.ab.about_description)
      // this._loadSriptService.loadDatatbles("tblSubject");
    this.SpinnerService.hide(); 
     });
   }

   onEdit(_id: number,ab: About) {
 
    this.aboutService.selectedAbout = null;
    this.aboutService.selectedAbout = ab;
    console.log(this.aboutService.selectedAbout);
    
    
  
    this.router.navigateByUrl('/aboutCollege/add',{ state: this.aboutService.selectedAbout });
  
  
    
  }
  
}
