
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private recruiterId: number | null = null;

  setRecruiterId(id: number) {
    this.recruiterId = id;
  }

  getRecruiterId(): number | null {
    return this.recruiterId;
  }
  private baseUrl = 'http://localhost:5000/recruiters'; // adjust this if needed

  addRecruiter(recruiterData: any): Promise<any> {
    return axios.post('http://localhost:5000/recruiters', recruiterData); // or your real endpoint
  }
  
  async getRecruiters() {
    return axios.get(`${this.baseUrl}/recruiters`);
  }

  async getUsers(): Promise<any[]> {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data; // Return the user data
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  }

  // Delete a user by ID
  async deleteUser(userId: string): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/${userId}`);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  }
  
  // Recruiter login
async loginRecruiter(email: string, password: string): Promise<any> {
  try {
    const response = await axios.post(`http://localhost:5000/recruiter-login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Recruiter login error:', error);
    throw error;
  }
}

// User registration
async registerUser(userData: { name: string, email: string, password: string, phone: string }): Promise<any> {
  try {
    const response = await axios.post(`http://localhost:5000/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('User registration error:', error);
    throw error;
  }
}
//job seeker login
loginJobSeeker(email: string, password: string): Promise<any> {
  return axios.post(`http://localhost:5000/users/login`, {
    email,
    password
  });
}

// api.service.ts

postJob(jobData: any): Promise<any> {
  return axios.post('http://localhost:5000/api/jobs', jobData)
    .then(response => response.data)
    .catch(error => {
      console.error('Post job error:', error);
      throw error;
    });
}
//get all jobs
getAllJobs(): Promise<any[]> {
  return axios
    .get('http://localhost:5000/api/jobs')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching jobs:', error);
      throw error;
    });
}
// get jobs posted by specific user 
getRecruiterJobs(recruiterId: number): Promise<any> {
  return axios.get(`http://localhost:5000/api/recruiters/${recruiterId}/jobs`)
    .then(response => response.data)
    .catch(error => {
      console.error('Fetch recruiter jobs error:', error);
      throw error;
    });
}
//make an application
async submitJobApplication(formData: FormData): Promise<any> {
  const response = await axios.post(`http://localhost:5000/apply`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
}
// get applications for recruiter
async getApplicationsForRecruiter(recruiterId: number): Promise<any[]> {
  const response = await axios.get(`http://localhost:5000/recruiter/${recruiterId}/applications`);
  return response.data;
}
// Method to schedule the interview
scheduleInterview(applicantId: number, interviewDate: string, interviewTime: string): Promise<any> {
  const interviewData = {
    applicantId,
    interviewDate,
    interviewTime,
  };

  return axios.post('http://localhost:5000/schedule-interview', interviewData)
    .then((response) => response.data)
    .catch((err) => {
      console.error('Error scheduling interview:', err);
      throw err;
    });
}

}
