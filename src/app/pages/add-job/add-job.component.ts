import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  job = {
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: ''
  };

  constructor(private router: Router, private jobService: JobService) {}
  

  // submitJob() {
  //   console.log('Job Submitted:', this.job);

  //   // In real app, you'd send this to a backend service
  //   alert(`Job "${this.job.title}" has been posted!`);

  //   // Navigate back to recruiter dashboard
  //   this.router.navigate(['/recruiter-dashboard']);
  // }
  submitJob() {
    this.jobService.addJob(this.job);
    alert(`Job "${this.job.title}" has been posted!`);
    this.router.navigate(['/job-listings']);
  }
}