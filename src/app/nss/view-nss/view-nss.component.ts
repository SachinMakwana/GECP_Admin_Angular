import { Component, OnInit  } from '@angular/core';
import { NssService } from "../../../services/component/nss.service";
import { Nss } from "../../models/nss.model";

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';



@Component({
  selector: 'app-view-nss',
  templateUrl: './view-nss.component.html',
  styleUrls: ['./view-nss.component.css'],
  providers: [NssService]
})
export class ViewNssComponent implements OnInit {

 nss: Nss;

  constructor(public nssService: NssService,
    private router: Router) { 

      this.nss= new Nss();
    }

  ngOnInit(): void {

    
    //this.nssService.selectedNss = null;
    if(history.state != undefined){
      this.nss = null;
      this.nss = history.state;
    }
  
  }

  onEdit(ns: Nss) {
 
    this.nssService.selectedNss = null;
    this.nssService.selectedNss = ns;
    console.log(this.nssService.selectedNss);
    
    
  
    this.router.navigateByUrl('/nss/add',{ state: this.nssService.selectedNss });
  
  
    
  }

 

}
