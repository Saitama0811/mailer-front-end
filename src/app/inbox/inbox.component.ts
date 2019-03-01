import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private service: ApiConnectionService, private routes: Router) { }



  ngOnInit() {
    this.service.getAllUsers().subscribe(val =>
      console.log(val));
  }

  refreshPage() {
    setTimeout(() => {this.routes.navigate(['/inbox']); }, 0);
  }

  composebuttonClicked()  {
    this.service.mailClicked = false;
    this.service.composeClicked = true;
  }

}
