import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  Name;
  username;
  password;

usermailobj;
loginstatus;
replymail;
mail;
draftmail;
searchResults;
mailClicked = false;
composeClicked = false;
  constructor(private http: HttpClient) { }

  onLogin(user, pass) {
    this.usermailobj = {
      username: user,
      password: pass
    };
    const x = this.http.post(`https://localhost:44307/api/login`, this.usermailobj);
    return x;
  }

  onSignup(firstname, secondname, email, pass, phone) {
    this.usermailobj = {
      first_name: firstname,
      second_name: secondname,
      username: email,
      password: pass,
      phone_number: phone
    };
    const x = this.http.post(`https://localhost:44307/api/signup`, this.usermailobj);
    return x;
  }

  getAllReceivedMail() {
    const user = JSON.parse(localStorage.getItem('username'));
    this.usermailobj = {
      username: user
    };
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
    const user = JSON.parse(localStorage.getItem('username'));
    this.usermailobj = {
      username: user
    };
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
    const user = JSON.parse(localStorage.getItem('username'));
    this.usermailobj = {
      username: user
    };
    const x =  this.http.post(`https://localhost:44307/api/importantmail`, this.usermailobj);
    return x;
  }

  getImportantMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/importantmail/${id}`);
    return x;
  }

  getAllStarredMail() {
    const user = JSON.parse(localStorage.getItem('username'));
    this.usermailobj = {
      username: user
    };
    const x =  this.http.post(`https://localhost:44307/api/starredmail`, this.usermailobj);
    return x;
  }

  getStarredMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/starredmail/${id}`);
    return x;
  }


  getAllTrashMail() {
    const user = JSON.parse(localStorage.getItem('username'));
    this.usermailobj = {
      username: user
    };
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
    const user = JSON.parse(localStorage.getItem('username'));
    this.usermailobj = {
      username: user
    };
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

  getMailsbySubject(data) {
    const x =  this.http.post(`https://localhost:44307/api/search`, data);
    return x;
  }

  getSearchMailbyId(id) {
    const x = this.http.get(`https://localhost:44307/api/search/${id}`);
    return x;
  }

}
