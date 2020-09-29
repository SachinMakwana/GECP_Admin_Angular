import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { LoadScriptsService } from 'src/services/load-scripts.service';
import { NgForm } from '@angular/forms';
import { NewsService } from '../../services/component/news.service';
import { News } from '../models/news.models';
import { Router } from '@angular/router'; 
import { NgxSpinnerService } from "ngx-spinner";  
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  news:News;
  
  constructor(public newsService: NewsService, private chRef: ChangeDetectorRef, private _loadSriptService: LoadScriptsService,private router: Router,private SpinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.refreshNewsList();
    this.newsService.selectedNews= null;
    
  }

  
 refreshNewsList(){
  this.SpinnerService.show(); 
   this.newsService.getNews().subscribe((res)=>{
    this.newsService.newss = res as News[];
    this.chRef.detectChanges();
    this._loadSriptService.loadDatatbles("tblNews");
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
    this.newsService.deleteNews(_id).subscribe((res)=>{
     
      this._loadSriptService.destroyDatatbles("tblNews");
      this.refreshNewsList();
      Swal.fire(
        'Deleted',
        'Your record has been deleted',
        'success',
      )
    });
  }
})
}
onEdit(_id: number,ne: News) {

 this.newsService.selectedNews = null;
 this.newsService.selectedNews = ne;
 console.log(this.newsService.selectedNews);
 
 

 this.router.navigateByUrl('/news/add',{ state: this.newsService.selectedNews });


 
}


}
