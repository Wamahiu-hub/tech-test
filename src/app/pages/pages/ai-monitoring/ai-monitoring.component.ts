import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-monitoring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-monitoring.component.html',
  styleUrls: ['./ai-monitoring.component.css']
})
export class AiMonitoringComponent {
  aiMetrics = [
    { name: 'Model Accuracy', value: '94%' },
    { name: 'Latency', value: '120 ms' },
    { name: 'Throughput', value: '250 req/s' },
    { name: 'Error Rate', value: '0.2%' }
  ];
}
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';  