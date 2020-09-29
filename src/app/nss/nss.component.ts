import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { NgForm } from '@angular/forms';
import { NssService } from '../../services/component/nss.service';
import { Nss } from '../models/nss.model';
import { Router } from '@angular/router'; 
import { NgxSpinnerService } from "ngx-spinner";  

import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-nss',
  templateUrl: './nss.component.html',
  styleUrls: ['./nss.component.css'],
  providers: [NssService]
})
export class NssComponent implements OnInit {

  
  nss:Nss;
  viewPdf:boolean;

  constructor(public nssService: NssService, private chRef: ChangeDetectorRef, private _loadSriptService: LoadScriptsService,private router: Router,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.refreshNssList();
    this.nssService.selectedNss = null;
    
  }


  refreshNssList(){
    this.SpinnerService.show(); 
     this.nssService.getNss().subscribe((res)=>{
      this.nssService.nsss = res as Nss[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblNss");
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
       this.nssService.deleteNss(_id).subscribe((res)=>{
        
         this._loadSriptService.destroyDatatbles("tblNss");
         this.refreshNssList();
         Swal.fire(
           'Deleted',
           'Your record has been deleted',
           'success',
         )
       });
     }
   })
  }
  

  onEdit(_id: number,ns: Nss) {
 
    this.nssService.selectedNss = null;
    this.nssService.selectedNss = ns;
    console.log(this.nssService.selectedNss);
    
    
  
    this.router.navigateByUrl('/nss/add',{ state: this.nssService.selectedNss });
  
  
    
  }

  
  onView(_id: number,ns: Nss) {
 this.nssService.getNssById(_id).subscribe(res => {
   this.nssService.selectedNss=res as Nss;
   console.log(this.nssService.selectedNss);
   this.viewPdf =true;
 });

    
    
    
  
    this.router.navigateByUrl('/nss/view',{ state: this.nssService.selectedNss });
  
  
    
  }
  






}
