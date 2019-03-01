import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
usermailobj = {
  username: 'abc1@mailer.com'
};
mail;
mailClicked = false;
composeClicked = false;
  constructor(private http: HttpClient) { }

  getAllReceivedMail() {
    const x =  this.http.post(`https://localhost:44307/api/receivedmail`, this.usermailobj);
    return x;
  }

  getReceivedMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/receivedmail/${id}`);
    return x;
  }

  deleteReceivedMail(id) {
    const x = this.http.delete(`https://localhost:44307/api/receivedmail/${id}`);
    return x;
  }

  getAllSentMail() {
    const x =  this.http.post(`https://localhost:44307/api/sentmail`, this.usermailobj);
    return x;
  }

  getSentMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/sentmail/${id}`);
    return x;
  }

  deleteSentMail(id) {
    const x = this.http.delete(`https://localhost:44307/api/sentmail/${id}`);
    return x;
  }
}
