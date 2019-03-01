import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  inboxmail = true;
  sentmail = false;
  draftmail = false;
  importantmail = false;
  starredmail = false;
  trashmail = false;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    this.service.getAllReceivedMail().subscribe(val =>
      console.log(val));
  }

  refreshPage() {
    setTimeout(() => {this.routes.navigate(['/inbox']); }, 0);
  }

  composebuttonClicked()  {
    this.service.mailClicked = false;
    this.service.composeClicked = true;
  }

  showInbox() {
    this.inboxmail = true;
    this.sentmail = false;
    this.draftmail = false;
    this.importantmail = false;
    this.starredmail = false;
    this.trashmail = false;
  }

  showSent() {
    this.inboxmail = false;
    this.sentmail = true;
    this.draftmail = false;
    this.importantmail = false;
    this.starredmail = false;
    this.trashmail = false;
  }

  showImportant() {
    this.inboxmail = false;
    this.sentmail = false;
    this.draftmail = false;
    this.importantmail = true;
    this.starredmail = false;
    this.trashmail = false;
  }

  showStarred() {
    this.inboxmail = false;
    this.sentmail = false;
    this.draftmail = false;
    this.importantmail = false;
    this.starredmail = true;
    this.trashmail = false;
  }

  showTrash() {
    this.inboxmail = false;
    this.sentmail = false;
    this.draftmail = false;
    this.importantmail = false;
    this.starredmail = false;
    this.trashmail = true;
  }

  showDraft() {
    this.inboxmail = false;
    this.sentmail = false;
    this.draftmail = true;
    this.importantmail = false;
    this.starredmail = false;
    this.trashmail = false;
  }

}
