import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
usermailobj = {
  username: 'abc1@mailer.com',
  Name: 'Saurabh Goel'
};
mail;
draftmail;
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

  getAllImportantMail() {
    const x =  this.http.post(`https://localhost:44307/api/importantmail`, this.usermailobj);
    return x;
  }

  getImportantMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/importantmail/${id}`);
    return x;
  }

  getAllStarredMail() {
    const x =  this.http.post(`https://localhost:44307/api/starredmail`, this.usermailobj);
    return x;
  }

  getStarredMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/starredmail/${id}`);
    return x;
  }


  getAllTrashMail() {
    const x =  this.http.post(`https://localhost:44307/api/trashmail`, this.usermailobj);
    return x;
  }

  getTrashMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/trashmail/${id}`);
    return x;
  }

  deleteTrashMail(id) {
    const x = this.http.delete(`https://localhost:44307/api/trashmail/${id}`);
    return x;
  }

  createmail(mailobj) {
    const x = this.http.post(`https://localhost:44307/api/createmail`, mailobj);
    return x;
  }

  saveDraftMail(draftobj) {
    const x = this.http.post(`https://localhost:44307/api/savedraft`, draftobj);
    return x;
  }


  getAllDraftMail() {
    const x =  this.http.post(`https://localhost:44307/api/draftmail`, this.usermailobj);
    return x;
  }

  getDraftMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/draftmail/${id}`);
    return x;
  }

  deleteDraftMail(id) {
    const x = this.http.delete(`https://localhost:44307/api/draftmail/${id}`);
    return x;
  }

}
