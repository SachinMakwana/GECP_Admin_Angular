import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './about-college/add/add.component';
import { LoadScriptsService } from '../services/load-scripts.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
