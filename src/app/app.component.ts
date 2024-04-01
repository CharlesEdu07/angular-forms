import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Customer {
  name: string;
  email: string;
  occupation: string = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customer = new Customer();

  occupations = ['Engineer', 'Doctor', 'Designer', 'Artist', 'Teacher'];

  save(form: NgForm) {
    // this.customer.name = form.value.name;
    // this.customer.email = form.value.email;
    // this.customer.occupation = form.value.occupation;

    console.log(form.value);
    console.log(this.customer);

    form.reset({ occupation: '' });
  }
}
