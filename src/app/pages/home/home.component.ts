import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Remote' | 'Freelance' | 'Contract';
  description: string;
  salary: string;
  tags: string[];
  postedDate: string;
}

interface Company {
  id: number;
  name: string;
  logo: string;
  industry: string;
  openPositions: number;
  rating: number;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentTestimonialIndex = 0;

  featuredJobs: Job[] = [
    {
      id: 1,
      title: 'Senior UI/UX Designer',
      company: 'TechCorp',
      companyLogo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=100&auto=format&fit=crop',
      location: 'New York, NY (Remote)',
      type: 'Full-time',
      description: 'Design innovative user interfaces and experiences for our flagship products.',
      salary: '85,000 - 120,000',
      tags: ['UI/UX', 'Figma', 'Adobe XD', 'User Research'],
      postedDate: '2 days ago'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'WebWizards',
      companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop',
      location: 'San Francisco, CA',
      type: 'Remote',
      description: 'Build responsive and interactive web applications using modern frameworks.',
      salary: '90,000 - 115,000',
      tags: ['React', 'TypeScript', 'CSS', 'Next.js'],
      postedDate: '1 week ago'
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      company: 'GrowthGenius',
      companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=100&auto=format&fit=crop',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Plan and execute digital marketing campaigns across multiple channels.',
      salary: '65,000 - 85,000',
      tags: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
      postedDate: '3 days ago'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataDynamics',
      companyLogo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=100&auto=format&fit=crop',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Analyze complex datasets and develop machine learning models.',
      salary: '110,000 - 140,000',
      tags: ['Python', 'ML', 'SQL', 'Data Visualization'],
      postedDate: '1 day ago'
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'InnovateTech',
      companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=100&auto=format&fit=crop',
      location: 'Austin, TX',
      type: 'Remote',
      description: 'Lead product development from ideation to market launch.',
      salary: '95,000 - 130,000',
      tags: ['Product Development', 'Agile', 'User Research'],
      postedDate: '5 days ago'
    },
    {
      id: 6,
      title: 'Motion Graphics Designer',
      company: 'CreativeStudio',
      companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=100&auto=format&fit=crop',
      location: 'Los Angeles, CA',
      type: 'Freelance',
      description: 'Create engaging animations and visual effects for marketing campaigns.',
      salary: '60 - 85/hour',
      tags: ['After Effects', 'Cinema 4D', 'Animation'],
      postedDate: '1 week ago'
    }
  ];

  featuredCompanies: Company[] = [
    {
      id: 1,
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=100&auto=format&fit=crop',
      industry: 'Technology',
      openPositions: 12,
      rating: 4.8
    },
    {
      id: 2,
      name: 'WebWizards',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop',
      industry: 'Web Development',
      openPositions: 8,
      rating: 4.5
    },
    {
      id: 3,
      name: 'GrowthGenius',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3603?q=80&w=100&auto=format&fit=crop',
      industry: 'Marketing',
      openPositions: 5,
      rating: 4.7
    },
    {
      id: 4,
      name: 'DataDynamics',
      logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=100&auto=format&fit=crop',
      industry: 'Data Analytics',
      openPositions: 9,
      rating: 4.6
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Software Engineer',
      company: 'TechCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      text: 'I found my dream job within just two weeks of using JobPortal! The platform is intuitive, and the job matching algorithm really understood my skills and preferences.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'GrowthGenius',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      text: 'After months of searching elsewhere, JobPortal connected me with the perfect opportunity that aligned with my career goals. The process was smooth and the support was excellent.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      company: 'CreativeStudio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
      text: 'The quality of job listings on JobPortal is outstanding. I appreciated the detailed company profiles and transparent salary information. Found my position in just 3 weeks!'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initParallaxEffect();
    this.initTestimonialSlider();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  initParallaxEffect(): void {
    const heroSection = document.querySelector('.hero');
    const ctaSection = document.querySelector('.cta-section');

    window.addEventListener('scroll', () => {
      if (heroSection) {
        const scroll = window.scrollY;
        const heroBackground = heroSection.querySelector('.parallax-bg') as HTMLElement;
        if (heroBackground) {
          heroBackground.style.transform = `translateY(${scroll * 0.4}px)`;
        }
      }

      if (ctaSection) {
        const ctaOffset = ctaSection.getBoundingClientRect().top;
        const ctaBackground = ctaSection.querySelector('.parallax-bg') as HTMLElement;
        if (ctaBackground && ctaOffset < window.innerHeight) {
          const ctaScroll = window.innerHeight - ctaOffset;
          ctaBackground.style.transform = `translateY(${ctaScroll * 0.2}px)`;
        }
      }
    });
  }

  initTestimonialSlider(): void {
    setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
      this.updateTestimonialSlider();
    }, 5000);
  }

  updateTestimonialSlider(): void {
    const slider = document.querySelector('.testimonials-slider') as HTMLElement;
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if (slider) {
      slider.style.transform = `translateX(-${this.currentTestimonialIndex * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
      if (index === this.currentTestimonialIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  prevTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateTestimonialSlider();
  }

  nextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    this.updateTestimonialSlider();
  }

  setTestimonialIndex(index: number): void {
    this.currentTestimonialIndex = index;
    this.updateTestimonialSlider();
  }

  filterJobs(type: string): void {
    // Filter logic would go here in a real application
    // This is just for UI demonstration
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent === type) {
        btn.classList.add('active');
      }
    });
  }
}