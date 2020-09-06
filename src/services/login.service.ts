import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Observable, Subject, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { ConfigurationModel } from '../app/common/constant';
import { APIConstant } from '../app/common/apiConstant';


@Injectable()
export class LoginService {
  redirectUrl: string;
  authorized?: boolean;
  httpOptions: any;
  constructor(private httpClient: HttpClient,
    private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  Login(loginVM) {
    return this.httpClient.post(ConfigurationModel.Configuration.BASE_API_URL + APIConstant.Account + "/login", loginVM, this.httpOptions)
  }

  LogOut(): void {
    window.sessionStorage.removeItem(ConfigurationModel.Configuration.USER_PROFILE);
    this.router.navigate(['']);
  }

  IsAuthorized() {
    const userData = sessionStorage.getItem(ConfigurationModel.Configuration.USER_PROFILE);
    if (userData) {
      this.authorized = true;
    }
    else {
      this.authorized = false;
    }
    return this.authorized;
  }

  ForgotPassword(email: string) {
    return this.httpClient.get(ConfigurationModel.Configuration.BASE_API_URL + APIConstant.Account + "/forgotPassword?email=" + email, this.httpOptions);
  }

  ResetPassword(resetPassword: any) {
    return this.httpClient.get(ConfigurationModel.Configuration.BASE_API_URL + APIConstant.Account + "/forgotpassword/changepassword?Token=" + resetPassword.Token + "&NewPassword=" + resetPassword.NewPassword, this.httpOptions);
  }

  ChangePassword(changePassword) {
    return this.httpClient.post(ConfigurationModel.Configuration.BASE_API_URL + APIConstant.Account + "/resetpassword", changePassword, this.httpOptions);
  }

  GetCurrentUser(): any {
    var userProfile = JSON.parse(window.sessionStorage.getItem(ConfigurationModel.Configuration.USER_PROFILE));
    if (userProfile != null && userProfile.accessToken != null) {
      return userProfile;
    }
  }

}
