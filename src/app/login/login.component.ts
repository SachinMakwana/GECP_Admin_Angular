import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

  public isSuccess(): void {
    //alert("Hi. I am a test call");
    this.router.navigateByUrl('/master');
  }
}
