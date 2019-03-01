import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft-mail',
  templateUrl: './draft-mail.component.html',
  styleUrls: ['./draft-mail.component.css']
})
export class DraftMailComponent implements OnInit {
value;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    this.service.getAllDraftMail().subscribe(val => this.value = val);
    console.log(this.value);
  }

  refreshPage() {
    setTimeout(() => {this.routes.navigate(['/inbox']); }, 0);
  }

  onClickMail(elementid: HTMLInputElement) {
    this.service.mailClicked = false;
    this.service.composeClicked = true;
    this.routes.navigate(['/inbox/' + elementid.id]);
    this.service.getDraftMailbyId(elementid.id).subscribe(val => this.service.draftmail = val);
    // this.service.getReceivedMailbyId()
  }

  onDeleteDraftMail(id: HTMLInputElement) {
    this.service.deleteDraftMail(id.id).subscribe(val => console.log(val));
  }

}
