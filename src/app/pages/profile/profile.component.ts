import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // For two-way binding
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="profile-container">
      <header class="profile-header">
        <h2>Welcome, {{ userName }}</h2>
        <p>{{ currentDate | date:'fullDate' }}</p>
        
        <div class="profile-search">
          <input
            type="text"
            placeholder="Search"
            [(ngModel)]="searchQuery"
          />
          <button (click)="onSearch()">
            Search
          </button>
        </div>
      </header>

      <main class="profile-main">
        <!-- Display user image or placeholder avatar -->
        <div class="avatar-section">
          <div class="avatar">
            <img
              src="https://via.placeholder.com/100"
              alt="{{ userName }}"
            />
          </div>
          <button (click)="enableEdit()" *ngIf="!editMode">
            Edit
          </button>
        </div>

        <!-- Profile form -->
        <form (ngSubmit)="onSubmit()" #profileForm="ngForm">
          <div class="form-group">
            <label for="email">My Email Address</label>
            <input
              type="email"
              id="email"
              [(ngModel)]="email"
              name="email"
              [readonly]="!editMode"
            />
          </div>

          <div class="form-group">
            <label for="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              [(ngModel)]="fullName"
              name="fullName"
              [readonly]="!editMode"
            />
          </div>

          <div class="form-group">
            <label for="country">Country</label>
            <select
              id="country"
              [(ngModel)]="country"
              name="country"
              [disabled]="!editMode"
            >
              <option value="">Select country</option>
              <option *ngFor="let c of countries" [value]="c">{{ c }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="language">Language</label>
            <select
              id="language"
              [(ngModel)]="language"
              name="language"
              [disabled]="!editMode"
            >
              <option value="">Select language</option>
              <option *ngFor="let lang of languages" [value]="lang">{{ lang }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="cvUpload">Upload your CV</label>
            <input
              type="file"
              id="cvUpload"
              (change)="onFileSelected($event)"
              [disabled]="!editMode"
            />
          </div>

          <button *ngIf="editMode" type="submit">
            Save
          </button>
        </form>
      </main>

      <footer class="profile-footer">
        <div class="footer-left">
          <h3>SkillMatch AI</h3>
          <p>Call now: +254 798234543</p>
          <p>© 2023 Job Portal. All Rights Reserved.</p>
        </div>
        <div class="footer-center">
          <h4>Quick Link</h4>
          <p><a routerLink="/about-us">About Us</a> | <a routerLink="/contact-us">Contact Us</a></p>
        </div>
        <div class="footer-right">
          <h4>Candidate</h4>
          <p>Browse Jobs | Companies | Resume Upload | Dashboard</p>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // Example data
  userName = 'Joseph';
  currentDate = new Date();

  // Form-bound data
  email: string = 'joseph@gmail.com';
  fullName: string = 'Joseph Wamahiu';
  country: string = '';
  language: string = '';

  countries: string[] = ['Kenya', 'United States', 'United Kingdom', 'Canada'];
  languages: string[] = ['English', 'French', 'Swahili', 'Spanish'];

  // Search bar
  searchQuery: string = '';

  // CV file
  selectedCVFile: File | null = null;

  // Editing state
  editMode = false;

  enableEdit() {
    this.editMode = true;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedCVFile = file;
      console.log('Selected CV file:', file);
      // can later upload this file to your server or AI service
    }
  }

  onSearch() {
    // e.g. Filter or search logic
    alert(`Searching for: ${this.searchQuery}`);
  }

  onSubmit() {
    // Save user profile changes
    console.log('Profile updated:');
    console.log('Email:', this.email);
    console.log('Full Name:', this.fullName);
    console.log('Country:', this.country);
    console.log('Language:', this.language);
    if (this.selectedCVFile) {
      console.log('CV File:', this.selectedCVFile.name);
    }
    alert('Profile has been updated successfully!');
    this.editMode = false;
  }
}
