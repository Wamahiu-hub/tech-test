import { Injectable } from '@angular/core';

interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [];

  addJob(job: Job) {
    this.jobs.push(job);
  }

  getJobs(): Job[] {
    return this.jobs;
  }
}
