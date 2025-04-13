import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-us">
      <h1>About Us</h1>
      <p>Welcome to SkiilsMatch AI – your all-in-one solution for jobs matching across different careers.</p>
      
      <h2>Our Mission</h2>
      <p>We aim to streamline the recruitment process with smart AI-powered tools that match talent with opportunity more effectively than ever before.</p>
      
      <h2>What We Offer</h2>
      <ul>
        <li>Easy job posting and candidate tracking</li>
        <li>Automated interview scheduling</li>
        <li>AI-powered candidate matching</li>
        <li>Real-time analytics for better hiring decisions</li>
      </ul>
      
      <h2>Contact Us</h2>
      <p>
  If you have any questions or feedback, feel free to 
  <a routerLink="/contact-us" (click)="openContactModal()" style="cursor: pointer;">Contact Us</a>.
</p>

    </div>

    <div *ngIf="showContactModal" class="modal-overlay">
      <div class="modal">
        <h2>Contact Us</h2>
        <form (ngSubmit)="closeContactModal()">
          <label for="name">Name:</label>
          <input id="name" type="text" required />

          <label for="email">Email:</label>
          <input id="email" type="email" required />

          <label for="message">Message:</label>
          <textarea id="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
          <button type="button" (click)="closeContactModal()">Cancel</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .about-us {
      padding: 2rem;
      max-width: 900px;
      margin: 0 auto;
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      animation: fadeIn 1s ease-in-out;
    }

    .about-us h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #2c3e50;
      text-align: center;
    }

    .about-us h2 {
      margin-top: 2rem;
      color: #34495e;
      font-size: 1.8rem;
      border-bottom: 2px solid #e74c3c;
      padding-bottom: 0.5rem;
    }

    .about-us ul {
      padding-left: 1.5rem;
      list-style-type: disc;
    }

    .about-us li {
      margin-bottom: 0.8rem;
      font-size: 1.1rem;
    }

    .about-us p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .about-us a {
      color: #e74c3c;
      text-decoration: none;
      font-weight: bold;
    }

    .about-us a:hover {
      text-decoration: underline;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      background-color: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      max-width: 500px;
      width: 100%;
    }

    .modal h2 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
      color: #2c3e50;
    }

    .modal form label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    .modal form input,
    .modal form textarea {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }

    .modal form button {
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .modal form button[type="submit"] {
      background-color: #2ecc71;
      color: #fff;
    }

    .modal form button[type="button"] {
      background-color: #e74c3c;
      color: #fff;
    }

    .modal form button:hover {
      opacity: 0.9;
    }
  `]
})
export class AboutUsComponent {
  showContactModal: boolean = false;

  openContactModal() {
    this.showContactModal = true;
  }

  closeContactModal() {
    this.showContactModal = false;
  }
}
