import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/ui/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  log(event: MouseEvent): void {
    console.log('Hello, frontend', event);
  }
}