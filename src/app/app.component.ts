import { Component } from '@angular/core';

import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
})
export class AppComponent {
  title = 'gecp-admin';

  constructor(private loginService: LoginService,
    private router: Router) {

  }

  ngOnInit() {

  }

  get getIsAuthorized() {
    if (this.loginService.IsAuthorized()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loginService.LogOut();
    this.router.navigateByUrl('/login');
  }
}
