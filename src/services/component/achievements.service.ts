import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Achievements } from '../../app/models/achievements.model';

@Injectable({
  providedIn: 'root'
})

export class AchievementsService {
  
  selectedAchievements: Achievements;
  achievements: Achievements[];
  readonly baseURL = "http://localhost:5000/achieve";

  constructor(private http: HttpClient) {
    this.selectedAchievements = new Achievements();
  }

  postAchievements(achieve: Achievements) {
    return this.http.post(this.baseURL, achieve);
  }

  getAchievements() {
    return this.http.get(this.baseURL);
  }

  updateAchievements(achieve: Achievements, _id: number) {
    return this.http.put(this.baseURL + `/${_id}`, achieve);
  }
  deleteAchievements(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
