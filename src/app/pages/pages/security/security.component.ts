import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule, AdminSidebarComponent],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  securityMetrics = [
    { title: 'Firewall Status', value: 'Active' },
    { title: 'Intrusion Attempts', value: '5' },
    { title: 'Vulnerabilities', value: '0 Found' },
    { title: 'System Alerts', value: '1 Critical' }
  ];
}
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminSidebarComponent } from "../../admin-sidebar/admin-sidebar.component";