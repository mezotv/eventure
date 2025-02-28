import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginComponent as LoginComponentOld } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponentOld },
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
