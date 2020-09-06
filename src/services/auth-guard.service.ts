import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
//import { RouteConstant } from '../common/route';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private loginService: LoginService,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.IsAuthorized()) {
      return true;
    }

    // navigate to login page
    //this.router.navigate([RouteConstant.login]);
    this.router.navigateByUrl('/login');
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
