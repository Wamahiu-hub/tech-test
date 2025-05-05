import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
 constructor(private router: Router){}
  navigateTo(page: string) {
    switch (page) {
      case 'dashboard':
        this.router.navigate(['/recruiters-portal']);
        break;
      case 'job-postings':
        this.router.navigate(['/job-listings']);
        break;
      case 'candidates':
        this.router.navigate(['/view-candidates']);
        break;
      case 'ai-chat':
        this.router.navigate(['/ai-chat']);
        break;
      case 'interviews':
        this.router.navigate(['/recruiter-interviews-dashboard']);
        break;
      case 'analytics':
        this.router.navigate(['/analytics']);
        break;
      default:
        console.error('Unknown page:', page);
    }
  }

  logout() {
    this.router.navigate(['/']);
  }

}
