import { Component, OnInit, ChangeDetectorRef   } from '@angular/core';
import { Router } from '@angular/router';
import { WomenDetailService } from 'src/services/component/women-detail.service';
import { WomenDetail } from '../models/women_detail.model';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-women-cell',
  templateUrl: './women-cell.component.html',
  styleUrls: ['./women-cell.component.css'],
  providers: [WomenDetailService]
})
export class WomenCellComponent implements OnInit {
  womendetail: WomenDetail;
  
  constructor(public womenService: WomenDetailService,
    private router: Router,private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshWomenDetail();
 
    
  }

  refreshWomenDetail(){
    this.SpinnerService.show(); 
     this.womenService.getWomenDetail().subscribe((res)=>{
      this.womenService.womendetails = res as WomenDetail[];
    this.SpinnerService.hide(); 
     });
   }

   onEdit(wd: WomenDetail) {
 
    this.womenService.selectedWomenDetail = wd;
    
    
  
    this.router.navigateByUrl('/womencell/add',{ state: this.womenService.selectedWomenDetail });
  
  
    
  }
}
