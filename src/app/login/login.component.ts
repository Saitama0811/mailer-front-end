import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  usernameerror = false;
  passworderror = false;
  passwordstatus = true;
  usernameerrormsg = '';
  passworderrormsg = '';


  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.username === '' || !this.username.match('@mailer.com')) {
      this.usernameerror = true;
    } else if (this.password === '') {
      this.usernameerror = false;
      this.passworderror = true;
      this.passwordstatus = false;
    } else if (this.password.length < 8) {
      this.usernameerror = false;
      this.passworderror = true;
      this.passwordstatus = false;
    } else {
        console.log(this.service.loginstatus);
        // this.doLogin();
        this.service.username = this.username;
        this.service.onLogin(this.username, this.password).subscribe(val => {
          this.service.loginstatus = val;
          if (this.service.loginstatus === true) {
            console.log(this.username);
            localStorage.setItem('username', JSON.stringify(this.username));
            this.routes.navigate(['/inbox']);
            } else {
            this.ngOnInit();
            this.usernameerror = true;
            this.passworderror = true;
            this.passwordstatus = false;
            localStorage.clear();
            }
        });
    }
  }

  // doLogin() {
  //   this.service.onLogin(this.username, this.password).subscribe(val => this.loginstatus = val);
  //   if (this.loginstatus === true) {
  //     this.service.username = this.username;
  //     this.routes.navigate(['/inbox']);
  //   } else {
  //     this.usernameerror = true;
  //     this.passworderror = true;
  //     this.passwordstatus = false;
  //     localStorage.clear();
  //   }
  // }


}

