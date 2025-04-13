import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="forgot-container">
      <div class="forgot-card">
        <h1>Forgot Password</h1>
        <p>Enter your email address below to receive password reset instructions.</p>
        <form (ngSubmit)="onSubmit()" #forgotForm="ngForm">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input 
              type="email"
              id="email"
              name="email"
              [(ngModel)]="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <button type="submit" [disabled]="!forgotForm.valid">Send Reset Link</button>
        </form>
        <div class="back-to-login">
          <a routerLink="/login">Back to Login</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simulate sending a reset link. Later, integrate with backend.
    console.log('Reset link requested for:', this.email);
    alert(`If an account exists for ${this.email}, a reset link has been sent.`);
    
    // Optionally, navigate back to the login page after submission:
    this.router.navigate(['/login']);
  }
}
