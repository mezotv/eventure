import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/Profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'dashboard', component: DashboardComponent}
];