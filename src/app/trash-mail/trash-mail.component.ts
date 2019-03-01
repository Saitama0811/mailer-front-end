import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash-mail',
  templateUrl: './trash-mail.component.html',
  styleUrls: ['./trash-mail.component.css']
})
export class TrashMailComponent implements OnInit {
value;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    this.service.getAllTrashMail().subscribe(val => this.value = val);
    console.log(this.value);
  }


  refreshPage() {
    setTimeout(() => {this.routes.navigate(['/inbox']); }, 0);
  }

  onClickMail(elementid: HTMLInputElement) {
    this.service.mailClicked = true;
    this.service.composeClicked = false;
    this.routes.navigate(['/inbox/' + elementid.id]);
    this.service.getTrashMailbyId(elementid.id).subscribe(val => this.service.mail = val);
    // this.service.getReceivedMailbyId()
  }

  onDeleteTrashMail(id: HTMLInputElement) {
    this.service.deleteTrashMail(id.id).subscribe(val => console.log(val));
  }

}
