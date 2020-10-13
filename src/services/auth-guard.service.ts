import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationModel } from 'src/app/common/constant';
import { LoginService } from './login.service';
import { Login } from '../app/models/login';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  routeURL: string;
  constructor(private loginService: LoginService,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.routeURL = state.url;
    if (this.loginService.isLoggedIn() && this.loginService.GetRole(next.data)) {
      return true;
    }
    else {
      if(state.url == '/dashboard' && this.loginService.isLoggedIn()){
       return true; 
      }
      Swal.fire({
        icon: 'error',
        title: 'Unauthorized Access...',
        text: "You're Not Authorized!"
      })
        this.router.navigate(['/']);
    }


    // navigate to login page
    //this.router.navigate([RouteConstant.login]);
    this.router.navigateByUrl('/login');
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}


