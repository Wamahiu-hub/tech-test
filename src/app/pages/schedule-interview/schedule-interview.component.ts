import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewService } from '../../services/interview.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent {
  candidate: any = null;
  date: string = '';
  time: string = '';

  constructor(
    private router: Router,
    private interviewService: InterviewService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.candidate = nav?.extras?.state?.['candidate'];
  }

  submitInterview() {
    if (this.date && this.time && this.candidate) {
      const interview = {
        candidate: this.candidate,
        date: this.date,
        time: this.time,
        scheduledAt: new Date()
      };

      this.interviewService.scheduleInterview(interview);
      alert(`Interview scheduled with ${this.candidate.name} on ${this.date} at ${this.time}`);
      this.router.navigate(['/recruiter-interviews-dashboard']);
    } else {
      alert('Please select both date and time.');
    }
  }
}
