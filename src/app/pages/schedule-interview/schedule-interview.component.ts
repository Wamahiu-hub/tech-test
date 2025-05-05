import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-interview',
  imports:[FormsModule, CommonModule],
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css'],
})
export class ScheduleInterviewComponent implements OnInit {
  selectedApplicant: any; // This will hold the selected applicant data
  interviewDate: string = ''; // Bound to the date input
  interviewTime: string = ''; // Bound to the time input

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Initialize the selected applicant from some service or route parameter
    // For example, here we assume selectedApplicant comes from a route parameter or from the list of applicants
    // this.selectedApplicant = this.api.getSelectedApplicant();  // You can modify this to get your actual selected applicant
  }

  scheduleInterview(app: any) {
    if (!this.interviewDate || !this.interviewTime) {
      alert('Please select both date and time for the interview.');
      return;
    }

    // Prepare the data to be sent to the backend or simply alert for now
    alert(`Scheduling interview with ${app.full_name} for the job: ${app.job_title}
           on ${this.interviewDate} at ${this.interviewTime}.`);

    // Example API POST call to schedule the interview in the backend
    // this.api.scheduleInterview(app.id, this.interviewDate, this.interviewTime)
    //   .then(response => {
    //     alert("Interview scheduled successfully!");
    //   })
    //   .catch(err => {
    //     console.error("Error scheduling interview:", err);
    //     alert("Failed to schedule interview.");
    //   });
  }
}
