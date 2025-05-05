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
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);

  @Output() close = new EventEmitter<void>();

  form = this.fb.group(
    {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.unAllowedEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      role: ['3', [Validators.required]], // 1-admin, 2-recruiter, 3-jobseeker
      termsAccepted: [false, [Validators.requiredTrue]],
    },
    { validators: RegisterPageComponent.passwordMatchValidator }
  );

  success = '';
  error = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(private authService: AuthService, private router: Router) {}

  get f() {
    return this.form.controls;
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onRegister() {
    if (this.form.invalid) {
      // Mark all fields as touched to trigger validation visuals
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        control?.markAsTouched();
      });
      return;
    }

    const { fullName, email, password, role } = this.form.value;

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
        this.form.reset();
        
        // Auto-redirect after 2 seconds
        setTimeout(() => {
          this.closeModal();
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Registration failed. Please try again.';
        this.success = '';
        console.error('Registration error:', err);
      },
    });
  }

  closeModal() {
    this.close.emit();
  }

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