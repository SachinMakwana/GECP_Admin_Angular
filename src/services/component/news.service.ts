import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { News } from '../../app/models/news.models'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  selectedNews: News;
  newss: News[];
  readonly baseURL = 'http://localhost:3000/news';

  constructor(private http: HttpClient) { 

    this.selectedNews = new News();
  }

  getNews() {
    return this.http.get(this.baseURL);
  }

  postNews(ne: News) {
    return this.http.post(this.baseURL, ne);
  }

  updateNews(ne: News, _id: number){
    return this.http.put(this.baseURL + `/${_id}`, ne);
  }

  deleteNews(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
