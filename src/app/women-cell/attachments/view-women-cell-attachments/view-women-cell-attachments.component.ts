import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { NgForm } from '@angular/forms';
import { WomenAttachService } from '../../../../services/component/women-attach.service';
import { WomenAttach } from '../../../models/womenattach.model';
import { Router } from '@angular/router'; 
import { NgxSpinnerService } from "ngx-spinner";  

import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-view-women-cell-attachments',
  templateUrl: './view-women-cell-attachments.component.html',
  styleUrls: ['./view-women-cell-attachments.component.css'],
  providers: [WomenAttachService]
})
export class ViewWomenCellAttachmentsComponent implements OnInit {
    
  womenattach:WomenAttach;
  viewPdf:boolean;

  constructor(public womenattachService: WomenAttachService, private chRef: ChangeDetectorRef, private _loadSriptService: LoadScriptsService,private router: Router,private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.refreshWomenAttachList();
    this.womenattachService.selectedWomenattach = null;
    
  }

  refreshWomenAttachList(){
    this.SpinnerService.show(); 
     this.womenattachService.getWomenAttach().subscribe((res)=>{
      this.womenattachService.womenattachs = res as WomenAttach[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblWomenAttach");
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
      this.womenattachService.deleteWomenAttach(_id).subscribe((res)=>{
       
        this._loadSriptService.destroyDatatbles("tblWomenAttach");
        this.refreshWomenAttachList();
        Swal.fire(
          'Deleted',
          'Your record has been deleted',
          'success',
        )
      });
    }
  })
 }
 onEdit(_id: number,wca: WomenAttach) {
 
  this.womenattachService.selectedWomenattach = null;
  this.womenattachService.selectedWomenattach = wca;
  console.log(this.womenattachService.selectedWomenattach);
  
  

  this.router.navigateByUrl('/womencell/add-attachments',{ state: this.womenattachService.selectedWomenattach });


  
}

onView(_id: number,wca: WomenAttach) {
this.womenattachService.getWomenAttachById(_id).subscribe(res => {
 this.womenattachService.selectedWomenattach=res as WomenAttach;
 console.log(this.womenattachService.selectedWomenattach);
 this.viewPdf =true;
});

  
  
  

  this.router.navigateByUrl('/womencell/view-attachments',{ state: this.womenattachService.selectedWomenattach });


  
}








}
