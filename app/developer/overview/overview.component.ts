import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'covalent-developer-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class DeveloperOverviewComponent implements OnInit {
  // Sidenav routes
  usecases: Object[] = [];
  scripts: Object[] = [];
  apis: Object[] = [];

  constructor(private _router: Router,
    public media: TdMediaService) {
  }

  ngOnInit(): void {
    this.usecases = [
      {
        title: 'Ingest clickstream data',
        route: '/browse/usecases/ingest-clickstream',
        description: 'In this use case we\'ll excercise APIs to get website data',
        show: true,
      },
      {
        title: 'Moving Average',
        route: '/browse/usecases/moving-average',
        description: 'Technical analysis is a key finance methodology',
        show: true,
      },
      {
        title: 'Sentiment Analysis',
        route: '/browse/usecases/sentiment-analysis',
        description: 'Every online retailer wants to deliver a five star experience',
        show: true,
      },
      {
        title: 'Unstructured Data',
        route: '/browse/usecases/unstructured-data',
        description: 'Sometimes you may have situations where you need',
        show: true,
      },
      {
        title: 'Using Vantage\'s SSO single-sign-on',
        route: '/browse/usecases/vantage-sso',
        description: 'This document provides a high level for using SSO',
        show: true,
      }
    ];
    this.scripts = [
      {
        title: 'Customer Complaints',
        link: 'https://appcenter.ux.ac.uda.io/editor/?scriptId=f875bf36-423f-45df-a857-e22efeae5a8c',
        description: 'Complaints broken down by product',
        show: true,
      },
      {
        title: 'Income Analysis',
        link: 'https://appcenter.ux.ac.uda.io/editor/?scriptId=b0f370bb-3655-4d12-8dbf-41a352193e62',
        description: 'Customer income by geo location',
        show: true,
      },
      {
        title: 'Enrich Data',
        link: 'https://appcenter.ux.ac.uda.io/editor/?scriptId=b0f370bb-3655-4d12-8dbf-41a352193e62',
        description: 'Combine and enhance existing data',
        show: true,
      },
      {
        title: 'Monitor Models',
        link: 'https://appcenter.ux.ac.uda.io/editor/?scriptId=b0f370bb-3655-4d12-8dbf-41a352193e62',
        description: 'Monitor production and challenger models',
        show: true,
      },
      {
        title: 'Stored Procedure',
        link: 'https://appcenter.ux.ac.uda.io/editor/?scriptId=32b0e539-a9e6-4470-a95e-9593139f4966',
        description: 'An advanced stored procedure to analyze employee data',
        show: true,
      }
    ];
    this.apis = [
      {
        title: 'Access',
        link: 'https://appcenter.ux.ac.uda.io/developer/apis/access',
        description: 'Defined by policies, which combine users and groups, roles, permissions, and resources to determine access levels',
        show: true,
      },
      {
        title: 'Apps',
        link: 'https://appcenter.ux.ac.uda.io/developer/apis/apps',
        description: 'Endpoint for managing development and deployment of containerized apps and “serverless” SQL functions',
        show: true,
      },
      {
        title: 'Ingest',
        link: 'https://appcenter.ux.ac.uda.io/developer/apis/apps',
        description: 'Multi-container deployments into the Kubernetes infrastructure of Vantage are managed with these endpoints',
        show: true,
      },
      {
        title: 'Notifications',
        link: 'https://appcenter.ux.ac.uda.io/developer/apis/notifications',
        description: 'Ingest endpoints enable customers and developers to move data from edge nodes and devices into Vantage',
        show: true,
      },
      {
        title: 'Systems',
        link: 'https://appcenter.ux.ac.uda.io/developer/apis/systems',
        description: 'Systems are defined as a high level database or data storage entity that can be accessed by users of Vantage',
        show: true,
      }
    ];
  }
}