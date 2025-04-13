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

  scheduleInterview(candidate: any) {
    this.router.navigate(['/schedule-interview'], {
      state: { candidate }
    });
  }
}
