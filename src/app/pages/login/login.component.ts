import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  loginError: string = '';

  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userRole: ['Admin', Validators.required],
      rememberMe: [false]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password, userRole } = this.loginForm.value;
      
      // Clear previous errors
      this.loginError = '';
      
      this.authService.login(email, password).subscribe({
        next: (response) => {
          // Store tokens and user information
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          
          // Store the selected role for routing purposes
          localStorage.setItem('userRole', userRole);
          
          // Check if the API returned role matches the selected role
          const apiRole = response.data.role;
          if (apiRole && apiRole !== userRole) {
            this.loginError = `You don't have access as ${userRole}. Your actual role is ${apiRole}.`;
            // Clear tokens since this is not authorized
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userRole');
            return;
          }
          
          // Navigate based on selected role
          switch (userRole) {
            case 'Admin':
              this.router.navigate(['/admin-dashboard']);
              break;
            case 'Job Seeker':
              this.router.navigate(['/job-seeker']);
              break;
            case 'Recruiter':
              this.router.navigate(['/recruiter-dashboard']);
              break;
            default:
              this.loginError = 'Invalid user role. Please select a valid role.';
              return;
          }
          
          this.closeLoginModal();
        },
        error: (error) => {
          console.error('Login error:', error);
          
          // Handle different error scenarios
          if (error.status === 401) {
            this.loginError = 'Invalid credentials. Please try again.';
          } else if (error.status === 403) {
            this.loginError = `You don't have access as ${userRole}. Please select the correct role.`;
          } else {
            this.loginError = 'Login failed. Please try again later.';
          }
        }
      });
    }
  }

  closeLoginModal() {
    this.closeModal.emit();
  }
}