import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starred-mail',
  templateUrl: './starred-mail.component.html',
  styleUrls: ['./starred-mail.component.css']
})
export class StarredMailComponent implements OnInit {
value;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    this.service.getAllStarredMail().subscribe(val => this.value = val);
    console.log(this.value);
  }

  onClickMail(elementid: HTMLInputElement) {
    this.service.mailClicked = true;
    this.service.composeClicked = false;
    this.routes.navigate(['/inbox/' + elementid.id]);
    this.service.getStarredMailbyId(elementid.id).subscribe(val => this.service.mail = val);
    // this.service.getReceivedMailbyId()
  }

}
