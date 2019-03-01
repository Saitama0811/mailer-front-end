import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html',
  styleUrls: ['./view-mail.component.css']
})
export class ViewMailComponent implements OnInit {

  constructor(private service: ApiConnectionService) { }

  ngOnInit() {
  }

  onReply() {
    this.service.composeClicked = true;
    this.service.mailClicked = false;
  }

}
