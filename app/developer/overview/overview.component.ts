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
        title: 'Analyst Homepage',
        route: '/analyst',
        description: 'view_compact',
        show: true,
      },
      {
        title: 'Path',
        route: '/',
        description: 'call_split',
        show: true,
      },
      {
        title: 'Model',
        route: '/',
        description: 'line_style',
        show: true,
      },
      {
        title: 'Discover',
        route: '/',
        description: 'new_releases',
        show: true,
      },
      {
        title: 'Workflow',
        route: '/',
        description: 'clear_all',
        show: true,
      }
    ];
    this.apis = [
      {
        title: 'Operations Homepage',
        route: '/operations',
        description: 'settings_applications',
        show: true,
      },
      {
        title: 'Engines',
        route: '/',
        description: 'developer_board',
        show: true,
      },
      {
        title: 'Resources',
        route: '/browse',
        description: 'memory',
        show: true,
      },
      {
        title: 'Network',
        route: '/monitoring',
        description: 'group_work',
        show: true,
      },
      {
        title: 'Deployments',
        route: '/deployments',
        description: 'cloud_upload',
        show: true,
      },
      {
        title: 'APIs & Services',
        route: '/apis',
        description: 'cast_connected',
        show: true,
      },
      {
        title: 'SSO & IAM',
        route: '/identify',
        description: 'person_pin',
        show: true,
      }
    ];
  }
}