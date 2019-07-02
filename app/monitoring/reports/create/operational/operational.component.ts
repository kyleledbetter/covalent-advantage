import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPageChangeEvent } from '@covalent/core/paging';

@Component({
  selector: 'covalent-create-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.css'],
})
export class ReportsCreateOperationalComponent implements OnInit {
  eventPageSize: IPageChangeEvent;
  pageSize: number = 100;
  size: number = 15;

  // Sidenav routes
  datasets: Object[] = [];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.datasets = [
      {
        title: 'CPU Usage',
        description: 'CPU usage by application and user',
      },
      {
        title: 'I/O Usage',
        description: 'I/O usage by application and user',
      },
      {
        title: 'AWT Usage',
        description: 'Average Wait Time (AWT)  usage by application and user',
      },
      {
        title: 'Node Utilization',
        description: 'Monitor SQL Engine node utilization',
      },
      {
        title: 'Queries',
        description: 'Monitor the queries being submitted and executed',
      },
      {
        title: 'Workloads',
        description: 'The number of workloads running on Vantage',
      },
      {
        title: 'Engine Status',
        description: 'Vantage engine health snapshot or history',
      },
      {
        title: 'API response time',
        description: 'API and services response times',
      },
      {
        title: 'Container memory usage',
        description: 'Memory usage per container',
      },
      {
        title: 'HTTP latency',
        description: 'Latency for HTTP calls across containers',
      },
      {
        title: 'Application Count',
        description: 'Number of applications running in containers',
      },
      {
        title: 'Executed container jobs',
        description: 'Number of container executions',
      },
      {
        title: 'Machine Learning usage',
        description: 'ML engine stats',
      },
      {
        title: 'AI usage',
        description: 'AI engine stats',
      },
      {
        title: 'QueryBand count',
        description: 'Number of queryband queries',
      },
    ];
  }

  changePageSize(event: IPageChangeEvent): void {
    this.eventPageSize = event;
  }
}
