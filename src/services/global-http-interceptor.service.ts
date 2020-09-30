import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RouteConstant } from '../app/common/route';
import { ToastrService } from 'ngx-toastr';
import { ToastMessage } from '../app/common/toastMessages';
import { ToastConstant } from '../app/common/toastConstant';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { AuthGuardService } from "../services/auth-guard.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor {

  /*constructor(private router: Router,
    private toastrService: ToastrService,
    private ngxUiLoaderService: NgxUiLoaderService) { }
*/
  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthGuardService);
    return next.handle(req);
    /*this.ngxUiLoaderService.start();
    return next.handle(req).pipe(
      catchError((error) => {
        this.ngxUiLoaderService.stop();
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 0:     //domain not found
                this.toastrService.error(ToastMessage.DomainNotFound, ToastConstant.Error);
                break;
              case 401:      //login
                this.router.navigateByUrl(RouteConstant.login);
                break;
              case 403:     //forbidden
                this.router.navigateByUrl(RouteConstant.unauthorized);
                break;
              case 404:      //not found
                this.toastrService.error(ToastMessage.TryAfterSomeTime, ToastConstant.Error);
                break;
              case 500:     //internal server error
                this.toastrService.error(ToastMessage.InternalServerError, ToastConstant.Error);
                break;
            }
          }
          //this.toastrService.error(error.message, ToastConstant.Error)
          return throwError(error);
        }
      }));
    this.ngxUiLoaderService.stop();*/
  }
}