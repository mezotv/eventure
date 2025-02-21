import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroSearchComponent],
  template: `
    <app-navbar />
    <app-hero-search />
  `,
  styles: []
})
export class AppComponent {}