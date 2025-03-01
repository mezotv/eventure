import { Component } from '@angular/core';
import { SidepanelComponent } from '../../shared/sidepanel/sidepanel.component'; // Import your sidepanel
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dashboard',
  standalone: true, 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CommonModule, 
    SidepanelComponent 
  ]
})
export class DashboardComponent {
  cards = [
    { title: 'Revenue', value: '$12,400', icon: 'fas fa-chart-line' },
    { title: 'Visitors', value: '2,579', icon: 'fas fa-user-friends' },
    { title: 'Messages', value: '23', icon: 'fas fa-envelope' },
    { title: 'Events', value: '5 Upcoming', icon: 'fas fa-calendar-alt' }
  ];
}
