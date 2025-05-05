import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent {
  jobs: any[] = [];
  recruiterJobs: any[] = [];

  constructor( private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    const recruiterId = this.apiService.getRecruiterId();

    if (!recruiterId) {
      alert('Recruiter ID not found.');
      return;
    }
  
    this.apiService.getRecruiterJobs(recruiterId)
      .then(data => {
        this.recruiterJobs = data.jobs;
      })
      .catch(err => {
        alert('Failed to load jobs');
      });
  }

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
