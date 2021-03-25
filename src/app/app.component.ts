import { Component } from '@angular/core';

import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators';
import { ConfigurationModel } from './common/constant';
import { Login } from './models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gecp-admin';
  role: any;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    const userData = this.loginService.getDecodedAccessToken() as Login;
    // this.role = userData.role;
    this.role = 'Admin';
  }

  get getIsAuthorized() {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  get Role() {
    return this.role;
  }

  logout() {
    this.loginService.LogOut();
    //this.router.navigateByUrl('');
  }
}
