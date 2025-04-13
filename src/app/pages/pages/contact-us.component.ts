import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="contact-us">
      <h1>Contact Us</h1>
      <p>We're here to help! If you have any questions, suggestions, or feedback, feel free to reach out to us.</p>

      <form (submit)="submitForm()">
        <label>
          Name:
          <input type="text" [(ngModel)]="name" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" [(ngModel)]="email" name="email" required />
        </label>

        <label>
          Message:
          <textarea [(ngModel)]="message" name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  `,
  styles: [`
    .contact-us {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    input, textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    button {
      align-self: flex-start;
      padding: 0.5rem 1rem;
      border: none;
      background-color: #4CAF50;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
  `]
})
export class ContactUsComponent {
  name = '';
  email = '';
  message = '';

  submitForm() {
    alert(`Thank you, ${this.name}. Your message has been sent!`);
    // In a real app, this would send the data to a server
  }
}
