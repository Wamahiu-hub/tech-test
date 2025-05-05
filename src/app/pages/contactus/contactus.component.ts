import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports:[FormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent {
  name = '';
  email = '';
  message = '';

  submitForm(form: NgForm) {
    if (form.valid) {
      alert(`Thank you, ${this.name}. Your message has been sent!`);
      // In a real app, this would send the data to a server
      form.resetForm();
    }
  }
}
