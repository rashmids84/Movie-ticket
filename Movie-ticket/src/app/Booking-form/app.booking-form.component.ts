import { Component } from '@angular/core';
    
import { Bookticket } from './app.bookticket.model';
 
@Component({
  selector: 'app-booking-form',
  templateUrl: './app.booking-form.component.html',
  styleUrls: ['./app.booking-form.component.css']
})
export class BookingFormComponent {
 
  names = ['Incredibles', 'Harry Potter',
            'Inside-Out'];
 
  model = new Bookticket(0, this.names[0], 10, 'date');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newBookticket() {
    this.model = new Bookticket(42, '', 0,'');
  }
}