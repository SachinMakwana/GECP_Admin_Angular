import { Component, OnInit  } from '@angular/core';
import { Affiliation } from 'src/app/models/affiliation.model';
import { CommonMethodService } from "src/services/commonMethod";

@Component({
  selector: 'app-view-affiliation',
  templateUrl: './view-affiliation.component.html',
  styleUrls: ['./view-affiliation.component.css']
})
export class ViewAffiliationComponent implements OnInit {

  affiliation: Affiliation;
  pdfSrc:any;

  constructor(private commonMethod: CommonMethodService) { 
    this.affiliation = new Affiliation();
   }

  ngOnInit(): void {
    if(history.state != undefined){
      this.affiliation = history.state;
      this.pdfSrc = this.commonMethod.base64ToBlob(this.affiliation.file);
    }
    else{
      this.affiliation._id = null
    }
  }

}
