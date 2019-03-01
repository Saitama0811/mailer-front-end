import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {

  mailstatus1 = false;
  mailstatus2 = false;
  mailstatus3 = false;
  mailstatus4 = false;

  constructor() { }

  ngOnInit() {
  }

  changemailstatus1() {
    this.mailstatus1 = true;
  }
  changemailstatus2() {
    this.mailstatus2 = true;
  }
  changemailstatus3() {
    this.mailstatus3 = true;
  }
  changemailstatus4() {
    this.mailstatus4 = true;
  }

}
