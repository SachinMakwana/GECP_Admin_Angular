import { Component, OnInit, NgModule } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ConfigurationModel } from '../common/constant';
import { LoginService } from "../../services/login.service";
import { Login } from '../models/login';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Login;
  loginModel: Login = new Login();
  username: string;
  password: string;

  constructor(private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService) {
    this.user = new Login();
  }

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

    this.user.username = this.username;
    this.user.password = this.password;

    if (this.username && this.password) {
      this.loginService.Login(this.user).subscribe(success => {
        if (success) {
          this.user = this.loginService.getDecodedAccessToken() as Login;
          this.router.navigate([redirect], navigationExtras);
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Unauthorized Access...',
            text: "You're Not Authorized To Access This Site!"
          })
          return;
        }
      });
    }
    else {
      this.toastr.error("Please Insert Data", "Required");
      return;
    }


    //userData.Username = "username";
    //userData.accessToken = "123";
    //userData.Username = this.loginModel.UserName;
    //userData.accessToken = result.result;
  }
}
