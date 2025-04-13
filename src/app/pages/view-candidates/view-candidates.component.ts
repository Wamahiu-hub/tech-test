import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-candidates',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.css']
})
export class ViewCandidatesComponent {

  constructor(private router: Router) {}

  candidates = [
    { name: 'Alice Johnson', email: 'alice@example.com', skills: 'Angular, TypeScript' },
    { name: 'Bob Smith', email: 'bob@example.com', skills: 'React, Node.js' },
    { name: 'Charlie Doe', email: 'charlie@example.com', skills: 'Python, Django' }
  ];

  goToDashboard() {
    this.router.navigate(['/recruiters-dashboard']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
