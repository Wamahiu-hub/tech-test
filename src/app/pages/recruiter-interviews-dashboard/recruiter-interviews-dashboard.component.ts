import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruiter-interviews-dashboard',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './recruiter-interviews-dashboard.component.html',
  styleUrls: ['./recruiter-interviews-dashboard.component.css']
})
export class RecruiterInterviewsDashboardComponent {
  candidates = [
    {
      name: 'Sarah Wilson',
      title: 'Senior UI/UX Designer',
      previousCompany: 'Google',
      skills: ['Figma', 'User Research', 'Prototyping'],
      experience: 8
    },
    {
      name: 'Michael Chen',
      title: 'Full Stack Developer',
      previousCompany: 'Amazon',
      skills: ['React', 'Node.js', 'PostgreSQL'],
      experience: 6
    }
  ];

  constructor(private router: Router) {}


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


  scheduleInterview(candidate: any) {
    this.router.navigate(['/schedule-interview'], {
      state: { candidate }
    });
  }
}
