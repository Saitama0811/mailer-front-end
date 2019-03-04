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
  searchmail = false;
  obj;
  name;
  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
    const user = localStorage.getItem('username');
    console.log(user);
    if (user === null) {
      this.routes.navigate(['/login']);
    } else {
      this.name = localStorage.getItem('username');
    }
    this.service.getAllReceivedMail().subscribe(val =>
      console.log(val));
    this.name = localStorage.getItem('username');


  }

  refreshPage() {
    setTimeout(() => {this.routes.navigate(['/inbox']); }, 0);
  }

  onsearch(searchdata: HTMLInputElement) {
    this.obj = {
      mail_subject: searchdata.value,
      username: this.service.usermailobj.username
    };
    console.log(searchdata.value);
    this.service.getMailsbySubject(this.obj).subscribe(val => this.service.searchResults = val);
    console.log(this.service.searchResults);
  }
  onLogout() {
    localStorage.clear();
    this.service.loginstatus = false;
    this.routes.navigate(['/login']);
  }
  composebuttonClicked()  {
    this.service.mailClicked = false;
    this.service.composeClicked = true;
    this.service.replymail = '';
  }

  showInbox() {
    this.inboxmail = true;
    this.sentmail = false;
    this.draftmail = false;
    this.importantmail = false;
    this.starredmail = false;
    this.trashmail = false;
    this.searchmail = false;
  }

  showSent() {
    this.inboxmail = false;
    this.sentmail = true;
    this.draftmail = false;
    this.importantmail = false;
    this.starredmail = false;
    this.trashmail = false;
    this.searchmail = false;
  }

  showImportant() {
    this.inboxmail = false;
    this.sentmail = false;
    this.draftmail = false;
    this.importantmail = true;
    this.starredmail = false;
    this.trashmail = false;
    this.searchmail = false;
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
    this.searchmail = false;
    this.trashmail = true;
  }

  showDraft() {
    this.inboxmail = false;
    this.sentmail = false;
    this.draftmail = true;
    this.importantmail = false;
    this.searchmail = false;
    this.starredmail = false;
    this.trashmail = false;
  }

  showSearch() {
    this.inboxmail = false;
    this.sentmail = false;
    this.draftmail = false;
    this.importantmail = false;
    this.searchmail = true;
    this.starredmail = false;
    this.trashmail = false;

  }

}
