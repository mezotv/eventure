// src/app/auth/components/login/login.component.ts
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
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
          <div class="error">Password is required</div>
          }
        </div>

        <div class="form-group">
          <button type="submit" [disabled]="loginForm.invalid || isLoading">
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>
        </div>

        @if (errorMessage) {
        <div class="error">
          {{ errorMessage }}
        </div>
        }
      </form>
    </div>
  `,
  styles: [
    `
      .login-container {
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
      input {
        width: 100%;
        padding: 8px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.refreshToken().subscribe(() => {
        console.log('Refreshed token');
      });
    }
  }
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  isLoading = false;
  errorMessage: string | null = null;

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = null;

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
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
