import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covalent-browse-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.css'],
})
export class BrowseUsecases implements OnInit {
  // Sidenav routes
  usecases: Object[] = [];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.usecases = [
      {
        title: 'Ingest clickstream data',
        route: 'ingest-clickstream',
        description: 'In this use case we\'ll excercise APIs to get website data',
        show: true,
      },
      {
        title: 'Moving Average',
        route: 'moving-average',
        description: 'Technical analysis is a key finance methodology',
        show: true,
      },
      {
        title: 'Sentiment Analysis',
        route: 'sentiment-analysis',
        description: 'Every online retailer wants to deliver a five star experience',
        show: true,
      },
      {
        title: 'Unstructured Data',
        route: 'unstructured-data',
        description: 'Sometimes you may have situations where you need',
        show: true,
      },
      {
        title: 'Using Vantage\'s SSO single-sign-on',
        route: 'vantage-sso',
        description: 'This document provides a high level for using SSO',
        show: true,
      }
    ];
  }
}