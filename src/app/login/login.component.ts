import { Component, OnInit, NgModule } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ConfigurationModel } from '../common/constant';
import { LoginService } from "../../services/login.service";
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: Login = new Login();

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : 'dashboard';

    // Set our navigation extras object
    // that passes on our global query params and fragment
    let navigationExtras: NavigationExtras = {
      preserveQueryParams: true,
      preserveFragment: true
    };

    const userData: any = {};
    userData.Username = "username";
    userData.accessToken = "123";
    //userData.Username = this.loginModel.UserName;
    //userData.accessToken = result.result;
    window.sessionStorage.setItem(ConfigurationModel.Configuration.USER_PROFILE, JSON.stringify(userData));
    // Redirect the user
    this.router.navigate([redirect], navigationExtras);
  }
}
