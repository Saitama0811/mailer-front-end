import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-important-mail',
  templateUrl: './important-mail.component.html',
  styleUrls: ['./important-mail.component.css']
})
export class ImportantMailComponent implements OnInit {
value;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    this.service.getAllImportantMail().subscribe(val => this.value = val);
    console.log(this.value);
  }

  onClickMail(elementid: HTMLInputElement) {
    this.service.mailClicked = true;
    this.service.composeClicked = false;
    this.routes.navigate(['/inbox/' + elementid.id]);
    this.service.getImportantMailbyId(elementid.id).subscribe(val => this.service.mail = val);
    // this.service.getReceivedMailbyId()
  }

}
