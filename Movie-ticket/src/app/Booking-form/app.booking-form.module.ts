import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookingFormComponent } from './app.booking-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   BookingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [BookingFormComponent]
})
export class BookingFormModule { }