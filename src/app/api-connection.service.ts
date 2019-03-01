import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
obj = {
  username: 'abc1@mailer.com'
};
mail;
mailClicked = 'false';
  constructor(private http: HttpClient) { }

  getAllUsers() {
    const x =  this.http.post(`https://localhost:44307/api/receivedmail`, this.obj);
    return x;
  }

  getReceivedMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/receivedmail/${id}`);
    return x;
  }
}
