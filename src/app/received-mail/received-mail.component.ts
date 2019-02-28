import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-received-mail',
  templateUrl: './received-mail.component.html',
  styleUrls: ['./received-mail.component.css']
})
export class ReceivedMailComponent implements OnInit {
  values;
  constructor(private service: ApiConnectionService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(val =>
      this.values = val);
  }

}
