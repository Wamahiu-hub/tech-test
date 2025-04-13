import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent {
  performanceData = [
    { title: 'CPU Usage', value: '40%' },
    { title: 'Memory Usage', value: '3.2 GB / 8 GB' },
    { title: 'Disk I/O', value: '120 MB/s' },
    { title: 'Network Throughput', value: '500 Mbps' }
  ];
}
