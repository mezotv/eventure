import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SidepanelComponent } from '../../shared/sidepanel/sidepanel.component';  // Reuse your sidebar

export interface UserProfile {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;  // Could convert this to Date if needed
  employment: {
      title: string;
      key_skill: string;
  };
  address: {
      city: string;
      street_name: string;
      street_address: string;
      zip_code: string;
      state: string;
      country: string;
      coordinates: {
          lat: number;
          lng: number;
      };
  };
  credit_card: {
      cc_number: string;
  };
  subscription: {
      plan: string;
      status: string;
      payment_method: string;
      term: string;
  };
}


@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [
    CommonModule,
    SidepanelComponent  
  ]
})

export class ProfileComponent implements OnInit {
  
  user: UserProfile | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize sample data here
    this.fetchUserProfile()
  }


  fetchUserProfile(): void {
    this.http.get<UserProfile>('https://random-data-api.com/api/users/random_user')
      .subscribe((data) => {
        this.user = data;
        //console.log('DATA', data);
      });
  }
}
