import { Component, OnInit, ChangeDetectorRef   } from '@angular/core';
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/services/load-scripts.service';
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
    private chRef: ChangeDetectorRef, private _loadScript: LoadScriptsService,
    private router: Router,private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.refreshWomenDetail();
    this.womenService.selectedWomenDetail = null;
    
  }

  refreshWomenDetail(){
    this.SpinnerService.show(); 
     this.womenService.getWomenDetail().subscribe((res)=>{
      this.womenService.womendetails = res as WomenDetail[];
      // var plain_text = htmlToPlaintext( "hy" );
      this.chRef.detectChanges();
      
      // this._loadScript.setSummernoteParseHTML("txtDescription",this.ab.about_description)
      // this._loadSriptService.loadDatatbles("tblSubject");
    this.SpinnerService.hide(); 
     });
   }

   onEdit(_id: number,wd: WomenDetail) {
 
    this.womenService.selectedWomenDetail = null;
    this.womenService.selectedWomenDetail = wd;
    console.log(this.womenService.selectedWomenDetail);
    
    
  
    this.router.navigateByUrl('/womencell/add',{ state: this.womenService.selectedWomenDetail });
  
  
    
  }
}
