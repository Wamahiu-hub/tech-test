// job-seeker.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-job-seeker',
  imports:[FormsModule, RouterModule, CommonModule],
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css'],
})
export class JobSeekerComponent implements OnInit {
  jobs: any[] = [];
  filteredJobs: any[] = [];
  searchTitle: string = '';
  searchLocation: string = '';
  searchExperience: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getAllJobs().then((data) => {
      this.jobs = data;
      this.filteredJobs = data;
    });
    this.jobId = this.route.snapshot.paramMap.get('id');
    console.log('User is applying to job ID:', this.jobId);
  }

  filterJobs(): void {
    this.filteredJobs = this.jobs.filter((job) => {
      const matchesTitle = this.searchTitle
        ? job.title.toLowerCase().includes(this.searchTitle.toLowerCase())
        : true;
      const matchesLocation = this.searchLocation
        ? job.location.toLowerCase().includes(this.searchLocation.toLowerCase())
        : true;
      const matchesExperience = this.searchExperience
        ? job.requirements.toLowerCase().includes(this.searchExperience.toLowerCase())
        : true;
      return matchesTitle && matchesLocation && matchesExperience;
    });
  }
  jobId: string | null = null;

}
