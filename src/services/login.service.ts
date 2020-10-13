import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, throwError } from "rxjs";
import { catchError, map, mapTo, retry, tap } from 'rxjs/operators';
import { ConfigurationModel } from '../app/common/constant';
import { APIConstant } from '../app/common/apiConstant';
import { Login } from "../app/models/login";
import { Role } from 'src/app/models/authorization/role.model';
import { Tokens } from "../app/models/authorization/tokens";

@Injectable()
export class LoginService {
  user: Login;
  username: string;
  redirectUrl: string;
  authorized?: boolean;
  httpOptions: any;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  public data;

  constructor(private httpClient: HttpClient,
    private router: Router) {
    this.user = new Login();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  Login(loginVM) {
    return this.httpClient.post<any>(ConfigurationModel.Configuration.BASE_API_URL + "/login", loginVM, { headers: this.httpOptions }).pipe(
      tap(tokens => this.doLoginUser(loginVM.username, tokens)),
      map(response => { return response }),
      catchError(error => {
        //alert(error.error);
        return of(false);
      }));
  }

  LogOut(): void {
    this.doLogoutUser()
    this.router.navigate(['']);
  }

  GetRole(data) {
    const userData = this.getDecodedAccessToken() as Login;

    if (userData.username && userData.role) {
      this.httpClient.post<Login>(ConfigurationModel.Configuration.BASE_API_URL + "/login/user", { username: userData.username }, this.httpOptions).subscribe(res => {
        this.user = res as unknown as Login;
      });

      if (this.user.role && (this.user.role == userData.role)) {
        console.log("for loop");
        for (let i in data) {
          console.log(data[i]);
          while(this.user.role === data[i]) {
            console.log("while");
            return true;
          }
        }
      }
      else { return false; }
    }
    else { return false; }
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


  refreshToken() {
    return this.httpClient.post<any>(ConfigurationModel.Configuration.BASE_API_URL + '/refresh', {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  isLoggedIn() {
    return this.getJwtToken();
  }

  getJwtToken() {
    return sessionStorage.getItem(this.JWT_TOKEN);
  }

  getDecodedAccessToken() {
    try {
      var token = this.getJwtToken();
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(atob(base64));
    }
    catch (Error) {
      return null;
    }
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return sessionStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    sessionStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    sessionStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    sessionStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    sessionStorage.removeItem(this.JWT_TOKEN);
    sessionStorage.removeItem(this.REFRESH_TOKEN);
  }
}
