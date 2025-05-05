// services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/api';
  
  constructor(private http: HttpClient) {}

  // Get token from localStorage
  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      withCredentials: true
    };
  }

  // Get recruiter ID from localStorage
  getRecruiterId(): string | null {
    return localStorage.getItem('userId');
  }

  // Post a job
  async postJob(jobData: any): Promise<any> {
    const url = `${this.apiUrl}/jobs`;
    return firstValueFrom(this.http.post(url, jobData, this.getAuthHeaders()));
  }

  // Get all jobs
  async getAllJobs(): Promise<any> {
    const url = `${this.apiUrl}/jobs`;
    return firstValueFrom(this.http.get(url));
  }

  // Get recruiter's jobs
  async getRecruiterJobs(): Promise<any> {
    const url = `${this.apiUrl}/jobs/recruiter`;
    return firstValueFrom(this.http.get(url, this.getAuthHeaders()));
  }

  // Get job by ID
  async getJobById(jobId: string): Promise<any> {
    const url = `${this.apiUrl}/jobs/${jobId}`;
    return firstValueFrom(this.http.get(url));
  }

  // Update job
  async updateJob(jobId: string, jobData: any): Promise<any> {
    const url = `${this.apiUrl}/jobs/${jobId}`;
    return firstValueFrom(this.http.put(url, jobData, this.getAuthHeaders()));
  }

  // Delete job
  async deleteJob(jobId: string): Promise<any> {
    const url = `${this.apiUrl}/jobs/${jobId}`;
    return firstValueFrom(this.http.delete(url, this.getAuthHeaders()));
  }

  // Other API methods...
}