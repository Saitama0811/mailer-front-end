import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname;
  lastname;
  email;
  password;
  confpassword;
  phonenumber;
  nameerror = false;
  emailerror = false;
  passworderror = false;
  defpassword = true;
  phonenumbererror = false;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    if (this.firstname === '' || this.lastname === '') {
      this.nameerror = true;
    } else if (!this.email.match('@mailer.com')) {
      this.emailerror = true;
    } else if (this.phonenumber === '' || this.phonenumber.length < 10) {
      this.phonenumbererror = true;
    } else if (this.password !== this.confpassword) {
      this.passworderror = true;
      this.defpassword = false;
    } else {
      this.service.onSignup(this.firstname, this.lastname, this.email, this.password, this.phonenumber).subscribe(val => console.log(val));
      this.routes.navigate(['/login']);
    }
  }

}
