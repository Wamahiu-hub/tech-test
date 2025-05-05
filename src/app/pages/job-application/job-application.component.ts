import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  imports:[FormsModule],
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  jobId!: number;

  form: any = {
    fullName: '',
    email: '',
    phone: '',
    experience: ''
  };

  cvFile!: File;
  coverLetterFile?: File;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobId = +id;
      console.log('Applying to Job ID:', this.jobId);
    }
  }

  onFileChange(event: any, fileType: string) {
    const file = event.target.files[0];
    if (fileType === 'cv') {
      this.cvFile = file;
    } else {
      this.coverLetterFile = file;
    }
  }

  async submitApplication() {
    const formData = new FormData();
    formData.append('jobId', this.jobId.toString());
    formData.append('fullName', this.form.fullName);
    formData.append('email', this.form.email);
    formData.append('phone', this.form.phone);
    formData.append('experience', this.form.experience);
    formData.append('cv', this.cvFile);
    if (this.coverLetterFile) {
      formData.append('coverLetter', this.coverLetterFile);
    }

    try {
      await this.api.submitJobApplication(formData);
      alert('Application submitted!');
    } catch (error) {
      console.error(error);
      alert('Submission failed.');
    }
  }
}
