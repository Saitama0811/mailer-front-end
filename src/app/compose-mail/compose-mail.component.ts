import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {
  maildata;
  draftobj;
  mailstatus1 = false;
  mailstatus2 = false;
  mailstatus3 = false;
  mailstatus4 = false;
  mailto1;
  mailto2;
  mailto3;
  mailto4;
  mailto5;
  mailsubject;
  mailbody;
  att1; att2; att3; att4; att5;
  attachment1;
  attachment2;
  attachment3;
  attachment4;
  attachment5;
  checked;
  impchecked;
  maildate = Date();

  constructor(private service: ApiConnectionService) { }

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

  check() {
    if (this.checked === true) {
      this.impchecked = 0;
    }    else {
      this.impchecked = 1;
    }
  }
  onAddAttachment() {
    this.att1 = this.attachment1;
    this.att2 = this.attachment2;
    this.att3 = this.attachment3;
    this.att4 = this.attachment4;
    this.att5 = this.attachment5;
  }

  onMailSend() {
    this.maildata = {
      mail_from: this.service.usermailobj.username,
      mail_to_1: this.mailto1,
      mail_to_2: this.mailto2,
      mail_to_3: this.mailto3,
      mail_to_4: this.mailto4,
      mail_to_5: this.mailto5,
      mail_subject: this.mailsubject,
      mail_body: this.mailbody,
      mail_date: '2025-12-10 12:32:10.1234567',
      mail_status: 'unread',
      is_important: this.impchecked,
      is_starred: 0,
      sender_delete_status: 'false',
      receiver_delete_status: 'false',
      attachment_1: this.att1,
      attachment_2: this.att2,
      attachment_3: this.att3,
      attachment_4: this.att4,
      attachment_5: this.att5
    };
    console.log(this.maildata);
    this.service.createmail(this.maildata).subscribe(val => console.log(val));

    this.service.composeClicked = false;
  }

  saveDraft() {
    this.draftobj = {
      mail_from: this.service.usermailobj.username,
      mail_subject: this.mailsubject,
      mail_body: this.mailbody
    };

    this.service.saveDraftMail(this.draftobj).subscribe(val => console.log(val));
    this.service.composeClicked = false;
  }


}
