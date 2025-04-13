import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <!-- HEADER -->
      <header>
        <div class="logo">
          <h1>SkillMatch AI</h1>
        </div>
        <nav>
          <a routerLink="/">Home</a>
          <a routerLink="/about-us">About Us</a>
          <a routerLink="/login">Login</a>
          <a routerLink="/register">Signup</a>
        </nav>
        <button routerLink="/profile" class="profile-btn">
          Go To Profile Page
        </button>
      </header>

      <!-- HERO SECTION -->
      <section class="hero">
        <div class="hero-text">
          <h2>
            "Discover a job that matches your interests and abilities."
          </h2>
          <p>
            Countless job openings in all major sectors are available for you.
          </p>
          <div class="search-bar">
            <input
              type="text"
              placeholder="Job title, Keyword..."
            />
            <input
              type="text"
              placeholder="Location"
            />
            <button>Get A Job</button>
          </div>
          <small>
            Suggestions: UI/UX Designer, Programming, Digital Marketing, Video, Animation...
          </small>
        </div>
        <div class="hero-image">
          <img
            src="https://via.placeholder.com/500x300.png?text=Hero+Image"
            alt="Hero"
          />
        </div>
      </section>

      <!-- FILTERED JOBS SECTION -->
      <section class="filtered-jobs">
        <h2>Filtered Jobs</h2>
        <div class="jobs-list">
          <div class="job-card" *ngFor="let job of mockJobs">
            <h3>{{ job.title }}</h3>
            <p>{{ job.description }}</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // For demonstration, let's mock some jobs
  mockJobs = [
    {
      title: 'UI/UX Designer',
      description: 'Design user-friendly interfaces and experiences.'
    },
    {
      title: 'Digital Marketer',
      description: 'Plan and execute online marketing campaigns.'
    },
    {
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.'
    }
  ];

  constructor(private router: Router) {}

  navigateToAboutUs() {
    this.router.navigate(['/about-us']);
  }

}
