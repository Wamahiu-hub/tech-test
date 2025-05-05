import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-view-candidates',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.css']
})
export class ViewCandidatesComponent {

  constructor(private router: Router, private api: ApiService) {}
  applications: any[] = [];

  ngOnInit(): void {
    this.candidate = {
      name: 'John Doe',
      job_title: 'Software Engineer',
    };
    const recruiterId = this.api.getRecruiterId(); 
    if (recruiterId) {
      this.api.getApplicationsForRecruiter(recruiterId)
        .then(apps => {
          this.applications = apps;
        })
        .catch(err => {
          console.error('Error loading apps', err);
        });
    } else {
      console.error('Recruiter ID is missing');
    }
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
  candidate: any;  // Assuming you are passing the candidate data
  date: string = '';  // For the date input
  time: string = '';  // For the time input


  scheduleInterview(app: any): void {
    this.candidate = app; // Store the selected candidate
    alert(`Scheduling interview with ${app.full_name} for job: ${app.job_title}`);

    // Ask for the interview date and time (you could add inputs or date/time pickers if needed)
    const interviewDate = prompt("Please enter the interview date (YYYY-MM-DD):");
    const interviewTime = prompt("Please enter the interview time (HH:MM):");

    // Basic validation to check if both date and time are entered
    if (!interviewDate || !interviewTime) {
      alert("Please provide both interview date and time.");
      return;
    }

    // Call API to schedule the interview
    this.api.scheduleInterview(app.id, interviewDate, interviewTime)
      .then(response => {
        alert("Interview successfully scheduled!");
        // You can update your UI here if needed (e.g., mark the applicant as 'Interview Scheduled')
      })
      .catch(err => {
        console.error("Error scheduling interview:", err);
        alert("Failed to schedule interview.");
      });
  }

}