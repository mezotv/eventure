import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginComponent as OldLogin } from './auth/components/login/login.component';
import { RegisterComponent as Oldregister } from './auth/components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'oldregister', component: Oldregister },
  { path: 'oldlogin', component: OldLogin },
  //   {
  //     path: 'dashboard',
  //     loadComponent: () =>
  //       import('./dashboard/dashboard.component').then(
  //         (c) => c.DashboardComponent
  //       ),
  //     canActivate: [authGuard],
  //   },
];
