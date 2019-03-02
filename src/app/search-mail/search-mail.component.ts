import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-mail',
  templateUrl: './search-mail.component.html',
  styleUrls: ['./search-mail.component.css']
})
export class SearchMailComponent implements OnInit {
value;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
  }

  onClickMail(elementid: HTMLInputElement) {
    this.service.mailClicked = true;
    this.service.composeClicked = false;
    this.routes.navigate(['/inbox/' + elementid.id]);
    this.service.getSearchMailbyId(elementid.id).subscribe(val => this.service.mail = val);
    // this.service.getReceivedMailbyId()
  }

}
