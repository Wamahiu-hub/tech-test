import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private scheduledInterviews: any[] = [];

  constructor() {}

  scheduleInterview(interview: any) {
    this.scheduledInterviews.push(interview);
    console.log('Interview scheduled:', interview);
  }

  getScheduledInterviews() {
    return this.scheduledInterviews;
  }
}
