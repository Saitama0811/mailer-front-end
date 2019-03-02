import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
value;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    this.service.getAllSentMail().subscribe(val => this.value = val);
    console.log(this.value);
  }

  onClickMail(elementid: HTMLInputElement) {
    this.service.mailClicked = true;
    this.service.composeClicked = false;
    this.routes.navigate(['/inbox/' + elementid.id]);
    this.service.getSentMailbyId(elementid.id).subscribe(val => this.service.mail = val);
    // this.service.getReceivedMailbyId()
  }

  onDeleteSentMail(id: HTMLInputElement) {
    this.service.deleteSentMail(id.id).subscribe(val => console.log(val));
  }

}
