import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidepanel',
  standalone: true, // 
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css'],
  imports: [MatSidenavModule, MatListModule, RouterModule]
})
export class SidepanelComponent {}
