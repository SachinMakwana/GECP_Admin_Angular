import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { NgForm } from '@angular/forms';
import { WomenMemberService } from '../../../../services/component/women-member.service';
import { WomenMember } from '../../../models/women_member.model';
import { Router } from '@angular/router'; 
import { NgxSpinnerService } from "ngx-spinner";  

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-view-women-cell-members',
  templateUrl: './view-women-cell-members.component.html',
  styleUrls: ['./view-women-cell-members.component.css'],
  providers: [WomenMemberService]
})
export class ViewWomenCellMembersComponent implements OnInit {

  wcmember:WomenMember;

  constructor(public wcmemberService: WomenMemberService, private chRef: ChangeDetectorRef, private _loadSriptService: LoadScriptsService,private router: Router,private SpinnerService: NgxSpinnerService) {
  }
  ngOnInit(): void {
    this.refreshWomenMemberList();
    this.wcmemberService.selectedwomenmember = null;
    
  }

  refreshWomenMemberList(){
    this.SpinnerService.show(); 
     this.wcmemberService.getWcmember().subscribe((res)=>{
      this.wcmemberService.womenmembers = res as WomenMember[];
      this.chRef.detectChanges();
      this._loadSriptService.loadDatatbles("tblWomenMember");
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
      this.wcmemberService.deleteWcmember(_id).subscribe((res)=>{
       
        this._loadSriptService.destroyDatatbles("tblWomenMember");
        this.refreshWomenMemberList();
        Swal.fire(
          'Deleted',
          'Your record has been deleted',
          'success',
        )
      });
    }
  })
 }
 onEdit(_id: number,wcm: WomenMember) {
 
  this.wcmemberService.selectedwomenmember = null;
  this.wcmemberService.selectedwomenmember = wcm;
  console.log(this.wcmemberService.selectedwomenmember);
  
  

  this.router.navigateByUrl('/womencell/add-member',{ state: this.wcmemberService.selectedwomenmember });


  
}

}
