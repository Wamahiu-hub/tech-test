import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, RegisterPayload } from '../../services/auth.service';

@Component({
  selector: 'app-auth-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-screen.component.html',
  styleUrl: './auth-screen.component.css',
})
export class AuthScreenComponent {
  private fb = inject(FormBuilder);

  @Output() close = new EventEmitter<void>();

  // Active view state
  isLoginView = true;

  // Login form with role selection
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['Job Seeker', [Validators.required]] // Default role is Job Seeker
  });

  // Register form
  registerForm = this.fb.group(
    {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.unAllowedEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      role: ['3', [Validators.required]], // 1-admin, 2-recruiter, 3-jobseeker
      termsAccepted: [false, [Validators.requiredTrue]],
    },
    { validators: AuthScreenComponent.passwordMatchValidator }
  );

  // Available roles
  roles = ['Admin', 'Recruiter', 'Job Seeker'];

  // UI state
  success = '';
  error = '';
  loginShowPassword = false;
  regShowPassword = false;
  regShowConfirmPassword = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Form controls getters
  get loginControls() {
    return this.loginForm.controls;
  }

  get registerControls() {
    return this.registerForm.controls;
  }

  // Toggle between login and register views
  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.success = '';
    this.error = '';
  }

  // Toggle password visibility
  togglePasswordVisibility(form: 'login' | 'register', field: 'password' | 'confirmPassword') {
    if (form === 'login') {
      this.loginShowPassword = !this.loginShowPassword;
    } else {
      if (field === 'password') {
        this.regShowPassword = !this.regShowPassword;
      } else {
        this.regShowConfirmPassword = !this.regShowConfirmPassword;
      }
    }
  }

  // Login handler
  onLogin() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    const { email, password, role } = this.loginForm.value;
    
    this.authService.login(email || '', password || '').subscribe({
      next: (response) => {
        this.success = 'Login successful! Redirecting...';
        this.error = '';
        
        // Override the role with the selected role
        localStorage.setItem('userRole', role || 'Job Seeker');
        
        setTimeout(() => {
          // Use the selected role directly instead of getting it from the service
          console.log("Selected role:", role);
          
          // Close modal if needed
          this.close.emit();
          
          // Navigate based on the selected role
          if (role === 'Admin') {
            this.router.navigate(['/admin-dashboard']);
          } else if (role === 'Recruiter') {
            this.router.navigate(['/recruiters-dashboard']);
          } else if (role === 'Job Seeker') {
            this.router.navigate(['/job-seeker']);
          } else {
            console.error('Unknown role:', role);
            this.router.navigate(['/']);
          }
        }, 1500);
      },
      error: (err) => {
        this.error = err.error?.message || 'Login failed. Please check your credentials.';
        this.success = '';
        console.error('Login error:', err);
      },
    });
  }

  closeModal() {
    this.close.emit();
  }

  // Register handler
  onRegister() {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    const { fullName, email, password, role } = this.registerForm.value;

    const userPayload: RegisterPayload = {
      name: fullName || '',
      email: email || '',
      password: password || '',
      role_id: parseInt(role || '3', 10),
    };

    this.authService.registerUser(userPayload).subscribe({
      next: (response) => {
        this.success = 'Registration successful! You can now login.';
        this.error = '';
        this.registerForm.reset();
        
        // Switch to login view after successful registration
        setTimeout(() => {
          this.isLoginView = true;
        }, 1500);
      },
      error: (err) => {
        this.error = err.error?.message || 'Registration failed. Please try again.';
        this.success = '';
        console.error('Registration error:', err);
      },
    });
  }

  // Custom validators
  unAllowedEmail(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value === 'hacker@gmail.com' ? { unAllowedEmail: true } : null;
  }

  static passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  getRoleLabel(roleId: string): string {
    switch (roleId) {
      case '1': return 'Admin';
      case '2': return 'Recruiter';
      case '3': return 'Job Seeker';
      default: return 'Job Seeker';
    }
  }
}