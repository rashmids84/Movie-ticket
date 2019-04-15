import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './app.signup.component';
import { UserService } from '../services/app.user.service';
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [UserService],
  exports:[SignupComponent]
})
export class SignUpModule { }