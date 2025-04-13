import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-dashboard',
  imports: [],
  standalone: true,

  templateUrl: './recruiter-dashboard.component.html',
  styleUrl: './recruiter-dashboard.component.css'
})

export class RecruiterDashboardComponent {

  constructor(private router: Router) {}

  goToRecruitersPortal() {
    this.router.navigate(['/recruiters-portal']);
  }
  goToAddJob() {
    this.router.navigate(['/add-job']);
  }
  goToInterviewsDashboard() {
    this.router.navigate(['/recruiter-interviews-dashboard']);
  }

  goToViewCandidates() {
    this.router.navigate(['/view-candidates']);
  }
  goToAIMatches(): void {
    console.log('Navigating to AI Matches...');
    // Add navigation logic here if needed
  }
  goToAnalytics() {
    this.router.navigate(['/analytics']);
  }
  

}