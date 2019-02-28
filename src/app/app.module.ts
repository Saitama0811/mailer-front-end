import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule,  MatCardModule, MatListModule, MatMenuModule,
    MatToolbarModule, MatSelectModule, MatOptionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { Error404Component } from './error404/error404.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReceivedMailComponent } from './received-mail/received-mail.component';
import { ViewMailComponent } from './view-mail/view-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    Error404Component,
    ChangepassComponent,
    InboxComponent,
    ReceivedMailComponent,
    ViewMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
