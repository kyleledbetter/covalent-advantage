import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covalent-developer-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class DeveloperOverviewComponent implements OnInit {
  // Sidenav routes
  usecases: Object[] = [];
  scripts: Object[] = [];
  apis: Object[] = [];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.usecases = [
      {
        title: 'Ingest clickstream data',
        route: '/',
        description: 'In this use case we\'ll excercise APIs to get website data',
        show: true,
      },
      {
        title: 'Moving Average',
        route: '/browse',
        description: 'Technical analysis is a key finance methodology',
        show: true,
      },
      {
        title: 'Sentiment Analysis',
        route: '/browse',
        description: 'Every online retailer wants to deliver a five star experience',
        show: true,
      },
      {
        title: 'Unstructured Data',
        route: '/browse',
        description: 'Sometimes you may have situations where you need',
        show: true,
      },
      {
        title: 'Using Vantage\'s SSO single-sign-on',
        route: '/monitoring',
        description: 'This document provides a high level for using SSO',
        show: true,
      }
    ];
    this.scripts = [
      {
        title: 'Deploy Models',
        route: '/analyst',
        description: 'Deliver models in production',
        show: true,
      },
      {
        title: 'Discover Data',
        route: '/',
        description: 'Discover type and location of data',
        show: true,
      },
      {
        title: 'Enrich Data',
        route: '/',
        description: 'Combine and enhance existing data',
        show: true,
      },
      {
        title: 'Monitor Models',
        route: '/',
        description: 'Monitor production and challenger models',
        show: true,
      },
      {
        title: 'Prepare Data',
        route: '/',
        description: 'Clean, validate and profile data',
        show: true,
      }
    ];
    this.apis = [
      {
        title: 'Access',
        route: '/operations',
        description: 'Defined by policies, which combine users and groups, roles, permissions, and resources to determine access levels',
        show: true,
      },
      {
        title: 'Apps',
        route: '/',
        description: 'Endpoint for managing development and deployment of containerized apps and “serverless” SQL functions',
        show: true,
      },
      {
        title: 'Deployments',
        route: '/browse',
        description: 'Multi-container deployments into the Kubernetes infrastructure of Vantage are managed with these endpoints',
        show: true,
      },
      {
        title: 'Ingest',
        route: '/monitoring',
        description: 'Ingest endpoints enable customers and developers to move data from edge nodes and devices into Vantage',
        show: true,
      },
      {
        title: 'Systems',
        route: '/deployments',
        description: 'Systems are defined as a high level database or data storage entity that can be accessed by users of Vantage',
        show: true,
      }
    ];
  }
}