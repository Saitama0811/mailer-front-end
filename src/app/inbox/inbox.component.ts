import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private service: ApiConnectionService) { }



  ngOnInit() {
    this.service.getAllUsers().subscribe(val =>
      console.log(val));
  }

}
