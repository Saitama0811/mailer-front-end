import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft-mail',
  templateUrl: './draft-mail.component.html',
  styleUrls: ['./draft-mail.component.css']
})
export class DraftMailComponent implements OnInit {

  constructor(private service: ApiConnectionService, private routes: Router) { }

  ngOnInit() {
  }

}
