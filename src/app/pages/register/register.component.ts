import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="register-container">
      <header>
        <h1>SkillMatch AI</h1>
        <nav>
          <a routerLink="/">Home</a>
          <a routerLink="/about-us">About Us</a>
          <a routerLink="/login">Login</a>
          <a routerLink="/register">Sign Up</a>
        </nav>
        <button routerLink="/profile" class="profile-btn">
          Go To Profile Page
        </button>
      </header>

      <div class="register-card">
        <h2>Registration Page</h2>
        <p>Register to apply for jobs of your choice all over the world</p>

        <form (ngSubmit)="onRegister()" #registerForm="ngForm">

          <!-- Full Name -->
          <div class="form-group">
            <label for="fullName">Full name <span>*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
              [(ngModel)]="fullName"
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email">Email ID <span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              [(ngModel)]="email"
            />
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password">Password <span>*</span> (Minimum 6 characters)</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              minlength="6"
              [(ngModel)]="password"
            />
          </div>

          <!-- Confirm Password -->
          <div class="form-group">
            <label for="confirmPassword">Confirm password <span>*</span></label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              required
              [(ngModel)]="confirmPassword"
            />
          </div>

          <!-- Mobile Number -->
          <div class="form-group">
            <label for="mobileNumber">Mobile number <span>*</span></label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              required
              [(ngModel)]="mobileNumber"
            />
          </div>

          <!-- Updates & Promotions Checkbox -->
          <div class="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                [(ngModel)]="updatesAndPromotions"
                name="updatesAndPromotions"
              />
              Send me important updates & promotions via SMS, email, and WhatsApp
            </label>
          </div>

          <!-- Terms & Conditions -->
          <p class="tnc">
            By clicking Register, you agree to the
            <a href="#" target="_blank">Terms and Conditions</a> & 
            <a href="#" target="_blank">Privacy Policy</a> of AlwaysApply.com
          </p>

          <!-- Submit Button -->
          <button
            type="submit"
            [disabled]="!registerForm.form.valid || !passwordsMatch()"
          >
            Register now
          </button>

          <p>or signup with</p>
          <div class="social-signup">
            <button type="button" class="google-btn">
              <img src="https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png" alt="Google" />
              Google
            </button>
            <button type="button" class="facebook-btn">
              <img src="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png" alt="Facebook" />
              Facebook
            </button>
          </div>

        </form>
      </div>
    </div>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  mobileNumber: string = '';
  updatesAndPromotions: boolean = false;

  // This function checks if passwords match
  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  onRegister() {
    if (!this.passwordsMatch()) {
      alert('Passwords do not match!');
      return;
    }

    // Display in console or an alert for now
    // Later integratin with a backend for real registration
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('Mobile Number:', this.mobileNumber);
    console.log('Updates & Promotions:', this.updatesAndPromotions);

    alert('Registration successful! (Simulated)');
  }

}
