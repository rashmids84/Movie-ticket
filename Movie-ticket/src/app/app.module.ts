
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/app.movie.module';
import { LoginModule } from './login/app.login.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './books/app.books.module';
import {SignUpModule} from './signup/app.signup.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing/app.routing.module';
import {BookingFormModule} from './Booking-form/app.booking-form.module';

@NgModule({
  declarations: [AppComponent],
  
  imports:[
   LoginModule,
    MovieModule,
   HttpClientModule,
   BrowserModule,
   FormsModule,
   BooksModule,
   //CurrencyConvertorPipe,
   SignUpModule,
   RouterModule,
   AppRoutingModule,
   BookingFormModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{ }