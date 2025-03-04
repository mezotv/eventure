import { Component, Input, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-event-discovery',
  imports: [MatButtonModule, MatSelectModule, MatFormFieldModule, MatIconModule],
  templateUrl: './event-discovery.component.html',
  styleUrl: './event-discovery.component.css'
})
export class EventDiscoveryComponent implements OnInit {
  @Input() type = ['Konzert', 'Festival', 'Theater', 'Sport', 'Kunst', 'Kultur'];
  @Input() location = ['Berlin', 'München', 'Heidenheim', 'Köln'];
  @Input() date = ['Heute', 'Morgen', 'Diese Woche', 'Diesen Monat'];
  
  eventSearchForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.eventSearchForm = this.fb.group({
      eventType: [''],
      location: [''],
      date: ['']
    });
  }
  
  ngOnInit(): void {
  }
  
  searchEvents(): void {
    if (this.eventSearchForm.valid) {
      console.log('Search params:', this.eventSearchForm.value);
      // Add logic to search for events
    }
  }
}