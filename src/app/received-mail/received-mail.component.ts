import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-received-mail',
  templateUrl: './received-mail.component.html',
  styleUrls: ['./received-mail.component.css']
})
export class ReceivedMailComponent implements OnInit {
  values;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(val =>
      this.values = val);
  }

  onClickMail(elementid: HTMLInputElement) {
    this.service.mailClicked = true;
    this.service.composeClicked = false;
    this.routes.navigate(['/inbox/' + elementid.id]);
    this.service.getReceivedMailbyId(elementid.id).subscribe(val => this.service.mail = val);
    // this.service.getReceivedMailbyId()
  }

  onDeleteReceivedMail(id: HTMLInputElement) {
    this.service.deleteReceivedMail(id.id).subscribe(val => console.log(val));
  }

}
