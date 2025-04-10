import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface User {
  // Basic Info
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  
  // Contact Info
  phone: string;
  mobile: string;
  website: string;
  socialMedia: string;
  
  // Personal Details
  birthDate: string;
  age: number | null;
  gender: string;
  maritalStatus: string;
  
  // Preferences
  newsletter: boolean;
  notifications: boolean;
  theme: string;
  
  // Professional Info
  occupation: string;
  salaryRange: string;
  skills: string[];
  experience: number | null;
  
  // Location
  country: string;
  state: string;
  city: string;
  zipCode: string;
  address: string;
  
  // Additional
  bio: string;
  profilePicture: File | null;
  resume: File | null;
  rating: number;
  availability: string;
  preferredContactTime: string;
  
  // Security
  securityQuestion: string;
  securityAnswer: string;
  twoFactorAuth: boolean;
}

@Component({
  selector: 'app-form-demo',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})

export class FormDemoComponent {

  user: User = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    mobile: '',
    website: '',
    socialMedia: '',
    birthDate: '',
    age: null,
    gender: '',
    maritalStatus: '',
    newsletter: false,
    notifications: true,
    theme: 'light',
    occupation: '',
    salaryRange: '',
    skills: [],
    experience: null,
    country: '',
    state: '',
    city: '',
    zipCode: '',
    address: '',
    bio: '',
    profilePicture: null,
    resume: null,
    rating: 3,
    availability: '',
    preferredContactTime: '',
    securityQuestion: '',
    securityAnswer: '',
    twoFactorAuth: false
  };

  countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France'];
  states: { [key: string]: string[] } = {
    'USA': ['California', 'Texas', 'New York', 'Florida'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia'],
    'UK': ['England', 'Scotland', 'Wales'],
    'Australia': ['New South Wales', 'Victoria', 'Queensland'],
    'Germany': ['Bavaria', 'Berlin', 'Hamburg'],
    'France': ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes']
  };
  skillsList = ['JavaScript', 'Angular', 'React', 'Node.js', 'Python', 'Java', 'SQL'];

  onSubmit(form: NgForm) {
    if (form.valid && this.user.password === this.user.confirmPassword) {
      console.log('Form Submitted', this.user);
      // Handle form submission here
    } else {
      console.log('Form is invalid');
    }
  }

  onCountryChange() {
    this.user.state = '';
  }

  onProfilePictureChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.user.profilePicture = input.files?.[0] || null;
  }

  onResumeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.user.resume = input.files?.[0] || null;
  }

}
