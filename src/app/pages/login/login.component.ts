import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h1>SkillMatch AI</h1>
        
        <!-- Left side: login form -->
        <div class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              [(ngModel)]="email"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <div class="password-wrapper">
              <input
                id="password"
                [type]="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                [(ngModel)]="password"
              />
              <button type="button" (click)="togglePassword()">
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>

          <div class="form-group radio-group">
            <label>Login as:</label>
            <label>
              <input
                type="radio"
                name="userRole"
                [value]="'Admin'"
                [(ngModel)]="userRole"
              />
              Admin
            </label>
            <label>
              <input
                type="radio"
                name="userRole"
                [value]="'Job Seeker'"
                [(ngModel)]="userRole"
              />
              Job Seeker
            </label>
            <label>
              <input
                type="radio"
                name="userRole"
                [value]="'Recruiter'"
                [(ngModel)]="userRole"
              />
              Recruiter
            </label>
          </div>

          <div class="form-group remember-group">
            <label>
              <input
                type="checkbox"
                [(ngModel)]="rememberMe"
              />
              Remember me
            </label>
            <a routerLink="/forgot-password" class="forgot-pw">Forgot Password?</a>
          </div>

          <button class="login-btn" (click)="onLogin()">
            Login
          </button>
        </div>

        <!-- Right side: image or illustration -->
        <div class="login-image">
          <img
            src="https://via.placeholder.com/400x300.png?text=Login+Image"
            alt="Login side image"
          />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userRole: string = 'Admin'; // default or empty
  rememberMe: boolean = false;
  showPassword: boolean = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('User Role:', this.userRole);
    console.log('Remember Me:', this.rememberMe);

    if (this.userRole === 'Job Seeker') {
      this.router.navigate(['/job-seeker']);
    } else if (this.userRole === 'Admin') {
      this.router.navigate(['/admin-dashboard']);
    } else if (this.userRole === 'Recruiter') {
      this.router.navigate(['/recruiter-dashboard']);
    } else {
      alert('Please select a user role!');
    }
  }
}
