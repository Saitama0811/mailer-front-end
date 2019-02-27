import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { Error404Component } from './error404/error404.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'forgotpass' , component: ForgotpassComponent},
  {path: '404' , component: Error404Component},
  {path: 'changepass' , component: ChangepassComponent},
  {path: '' , redirectTo: '/login', pathMatch: 'full'},
  {path: 'inbox' , component: InboxComponent},
  {path: '**' , component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
