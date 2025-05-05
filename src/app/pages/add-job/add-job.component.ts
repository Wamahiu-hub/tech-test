import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  title = '';
  company = '';
  location = '';
  description = '';
  industry = '';
  requirements = '';
  type = '';

  constructor(private apiService: ApiService, private router: Router) {}
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
  

  postJob() {
    const recruiter_id =  this.apiService.getRecruiterId(); 

    if (!recruiter_id) {
      alert('Recruiter ID not found. Please login again.');
      return;
    }

    const jobData = {
      recruiter_id: recruiter_id,
      title: this.title,
      company: this.company,
      location: this.location,
      description: this.description,
      industry: this.industry,
      requirements: this.requirements,
      type: this.type
    };

    this.apiService.postJob(jobData).then(() => {
      alert('Job posted!');
      this.router.navigate(['/recruiters-portal']);
    }).catch((err) => {
      alert('Failed to post job');
      console.error(err);
    });
  }
}