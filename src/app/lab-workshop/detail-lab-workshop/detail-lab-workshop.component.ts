import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabAndWorkshop } from 'src/app/models/labAndWorkshop.model';
import { LabAndWorkshopService } from 'src/services/component/labAndWorkshop.service';
import { LoadScriptsService } from 'src/services/load-scripts.service';

@Component({
  selector: 'app-detail-lab-workshop',
  templateUrl: './detail-lab-workshop.component.html',
  styleUrls: ['./detail-lab-workshop.component.css']
})
export class DetailLabWorkshopComponent implements OnInit {

  labAndWorkshop: LabAndWorkshop;

  constructor(public labAndWorkshopService: LabAndWorkshopService,
    private _loadScript: LoadScriptsService,
    private router: Router,) { 
      this.labAndWorkshop = new LabAndWorkshop();
     }

  ngOnInit(): void {
    if (history.state != undefined) {
      this.labAndWorkshop = null;
      this.labAndWorkshop = history.state;
      //this._loadScript.setSummernoteCode("description",this.labAndWorkshop.description);
    }
  }

  onEdit(data: LabAndWorkshop) {
    this.labAndWorkshopService.selectedLabAndWorkshop = null;
    this.labAndWorkshopService.selectedLabAndWorkshop = data;

    this.router.navigateByUrl('/labandworkshop/add', { state: this.labAndWorkshopService.selectedLabAndWorkshop });
  }

}
