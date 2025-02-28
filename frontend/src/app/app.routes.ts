import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  //   { path: '' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //   {
  //     path: 'dashboard',
  //     loadComponent: () =>
  //       import('./dashboard/dashboard.component').then(
  //         (c) => c.DashboardComponent
  //       ),
  //     canActivate: [authGuard],
  //   },
];
