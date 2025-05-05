import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, RegisterPayload } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true, // Add this since you're using imports in component decorator
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  display: boolean = false;
  isLogin: boolean = true;
  
  loginForm: FormGroup;
  passwordType: string = 'password';
  userRole: string = 'Admin';
  
  // Registration fields
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  mobileNumber: string = '';
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userRole: ['', Validators.required]
    });
  }
  
  showModal() {
    this.display = true;
  }
  
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
  
  showLogin() {
    this.isLogin = true;
  }
  
  showRegister() {
    this.isLogin = false;
  }
  
  login() {
    if (this.loginForm.valid) {
      const { email, password, userRole } = this.loginForm.value;
      
      this.authService.login(email, password).subscribe({
        next: (res) => {
          console.log('Login successful', res);
          
          const role = res.data.role;
          if (role === 'Admin') {
            this.router.navigate(['/admin-dashboard']);
          } else if (role === 'Job Seeker') {
            this.router.navigate(['/job-seeker']);
          } else if (role === 'Recruiter') {
            this.router.navigate(['/recruiter-dashboard']);
          }
          
          // Save accessToken if needed
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          
          this.closeLoginModal();
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('Invalid credentials. Please try again.');
        }
      });
    }
  }

  closeLoginModal() {
    this.display = false;
    this.loginForm.reset();
  }
  
  onRegister() {
    if (this.password === this.confirmPassword) {
      const userData: RegisterPayload = {
        name: this.fullName,
        email: this.email,
        password: this.password,
        role_id: 3 // Default to job seeker (role_id = 3)
      };
    
      this.authService.registerUser(userData).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          alert('Registration successful!');
          this.closeModal();
        },
        error: (err) => {
          console.error('Registration error:', err);
          alert('Registration failed. Please try again.');
        }
      });
    
    } else {
      alert('Passwords do not match');
    }
  }
  
  passwordsMatch() {
    return this.password === this.confirmPassword;
  }
  
  closeModal() {
    this.display = false;
    this.loginForm.reset();
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.mobileNumber = '';
  }
}