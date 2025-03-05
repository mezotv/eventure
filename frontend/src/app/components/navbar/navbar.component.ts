import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, RouterModule, MatMenuModule, MatDividerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected auth = inject(AuthService);

  protected isLoggedIn = this.auth.isAuthenticated();

  protected fullName = this.auth.getFullName();
}
