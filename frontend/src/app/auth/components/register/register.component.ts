// src/app/auth/components/register/register.component.ts
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="register-container">
      <h2>Register</h2>
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            formControlName="fullName"
            id="fullName"
            required
          />
          @if (fullName?.invalid && (fullName?.dirty || fullName?.touched)) {
          <div class="error">Full name is required</div>
          }
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" formControlName="email" id="email" required />
          @if (email?.invalid && (email?.dirty || email?.touched)) {
          <div class="error">Please enter a valid email</div>
          }
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            formControlName="password"
            id="password"
            required
          />
          @if (password?.invalid && (password?.dirty || password?.touched)) {
          <div class="error">Password must be at least 6 characters</div>
          }
        </div>

        <div class="form-group">
          <button type="submit" [disabled]="registerForm.invalid || isLoading">
            {{ isLoading ? 'Registering...' : 'Register' }}
          </button>
        </div>

        @if (errorMessage) {
        <div class="error">
          {{ errorMessage }}
        </div>
        } @if (successMessage) {
        <div class="success">
          {{ successMessage }}
        </div>
        }
      </form>
    </div>
  `,
  styles: [
    `
      .register-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
      }
      .form-group {
        margin-bottom: 15px;
      }
      .error {
        color: red;
        font-size: 12px;
        margin-top: 5px;
      }
      .success {
        color: green;
        margin-top: 10px;
      }
      input {
        width: 100%;
        padding: 8px;
      }
    `,
  ],
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  isLoading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  get fullName() {
    return this.registerForm.get('fullName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = null;
    this.successMessage = null;

    const { fullName, email, password } = this.registerForm.value;

    this.authService.register(fullName, email, password).subscribe({
      next: () => {
        this.successMessage =
          'Registration successful! Redirecting to login...';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
