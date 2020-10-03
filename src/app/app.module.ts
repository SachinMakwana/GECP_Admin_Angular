import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpInterceptorService } from '../services/global-http-interceptor.service';
import { DatePipe } from '@angular/common';

import { LoadScriptsService } from '../services/load-scripts.service';
import { LoginService } from '../services/login.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    AuthGuardService,
    LoginService,
    LoadScriptsService,
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
