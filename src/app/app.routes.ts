// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { JobSeekerComponent } from './pages/job-seeker/job-seeker.component';
import { RecruiterDashboardComponent } from './pages/recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterInterviewsDashboardComponent } from './pages/recruiter-interviews-dashboard/recruiter-interviews-dashboard.component';
import { ScheduleInterviewComponent } from './pages/schedule-interview/schedule-interview.component';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { JobListingsComponent } from './pages/job-listings/job-listings.component';
import { ViewCandidatesComponent } from './pages/view-candidates/view-candidates.component';
import { DashboardComponent } from './pages/pages/dashboard/dashboard.component';
import { JobPostingsComponent } from './pages/pages/job-postings/job-postings.component';
import { CandidatesComponent } from './pages/pages/candidates/candidates.component';
import { AiChatComponent } from './pages/pages/ai-chat/ai-chat.component';
import { InterviewsComponent } from './pages/pages/interviews/interviews.component';
import { AnalyticsComponent } from './pages/pages/analytics/analytics.component';
import { AboutUsComponent } from './pages/pages/about-us.component';
import { ContactUsComponent } from './pages/contactus/contactus.component';
import { JobApplicationComponent } from './pages/job-application/job-application.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { AuthScreenComponent } from './pages/auth-screen/auth-screen.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'contact', redirectTo: 'contact-us', pathMatch: 'full' },
  { path: 'get-in-touch', redirectTo: 'contact-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'job-postings', component: JobPostingsComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'about', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'aboutus', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'ai-chat', component: AiChatComponent },
  { path: 'interviews', component: InterviewsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'job-seeker', component: JobSeekerComponent },
  { path: 'job-listings', component: JobListingsComponent },
  {
    path: 'user-management',
    loadComponent: () =>
      import('./pages/pages/user-management/user-management.component').then(m => m.UserManagementComponent),
  },
  { path: 'recruiters-dashboard', component: RecruiterDashboardComponent },
  { path: 'view-candidates', component: ViewCandidatesComponent },
  { path: 'add-job', component: AddJobComponent },
  {path: 'recruiters-dashboard' , component: RecruiterDashboardComponent},
  {
    path: 'job-application',
    loadComponent: () => import('./pages/job-application/job-application.component').then(m => m.JobApplicationComponent)
  },
  {
    path: 'security',
    loadComponent: () =>
      import('./pages/pages/security/security.component').then(m => m.SecurityComponent),
  },
  {
    path: 'ai-monitoring',
    loadComponent: () =>
      import('./pages/pages/ai-monitoring/ai-monitoring.component').then(m => m.AiMonitoringComponent),
  },
  {
    path: 'performance',
    loadComponent: () =>
      import('./pages/pages/performance/performance.component').then(m => m.PerformanceComponent),
  },
  {
    path: 'recruiter-dashboard',
    loadComponent: () =>
        import('./pages/recruiter-dashboard/recruiter-dashboard.component').then(m => m.RecruiterDashboardComponent),
  },
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
  },
  
  {
    path: 'recruiter-interviews-dashboard',
    component: RecruiterInterviewsDashboardComponent
  },
  { 
    path: 'schedule-interview', component: ScheduleInterviewComponent 
  },
  {
    path: 'job-application/:id', 
    component: JobApplicationComponent
  },
  { path: 'register', component: AuthScreenComponent },
];
