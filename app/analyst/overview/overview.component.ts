import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covalent-analyst-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class AnalystOverviewComponent implements OnInit {
  // Sidenav routes
  demos: Object[] = [];
  apps: Object[] = [];
  paths: Object[] = [];
  models: Object[] = [];
  workflows: Object[] = [];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.demos = [
      {
        title: 'Retail',
        link: 'http://portal02.teratitan.com/TitanRetail/index.php',
        description: 'Complaints broken down by product',
        show: true,
      },
      {
        title: 'Finance',
        link: 'http://portal02.teratitan.com/TitanFinance/index.php',
        description: 'Customer income by geo location',
        show: true,
      },
      {
        title: 'Connections',
        link: 'https://connections.teradata.com/groups/cim-customer-interaction-management-product-information/content?filterID=contentstatus[published]~category[demo]',
        description: 'Combine and enhance existing data',
        show: true,
      },
      {
        title: 'Publications',
        link: 'http://infocentral.daytonoh.teradata.com/online-pubs/applsoft/iOnline-TSG-BrowseBy.cfm',
        description: 'Monitor production and challenger models',
        show: true,
      }
    ];
    this.apps = [
      {
        title: 'Marketing Command Center',
        link: 'http://dashboard02.teratitan.com/',
        description: 'Defined by policies, which combine users and groups, roles, permissions, and resources to determine access levels',
        show: true,
      },
      {
        title: 'Channel Interaction Services',
        link: 'http://cim02.teratitan.com/tcimadmin',
        description: 'Endpoint for managing development and deployment of containerized apps and “serverless” SQL functions',
        show: true,
      },
      {
        title: 'Data Capture Services',
        link: 'http://teratitan.com/Portal/dashboard.php#',
        description: 'Multi-container deployments into the Kubernetes infrastructure of Vantage are managed with these endpoints',
        show: true,
      },
      {
        title: 'Vantage Customer Experience',
        link: 'https://cj02.teratitan.com/',
        description: 'Ingest endpoints enable customers and developers to move data from edge nodes and devices into Vantage',
        show: true,
      }
    ];
    this.paths = [
      {
        title: 'Customer Journey',
        link: 'http://dashboard02.teratitan.com/',
        description: 'Track a customer from capture to departure',
        show: true,
      },
      {
        title: 'Website traffic funnel',
        link: 'http://cim02.teratitan.com/tcimadmin',
        description: 'Define exactly where we are losing customers',
        show: true,
      },
      {
        title: 'Abandoned cart dropoff points',
        link: 'http://teratitan.com/Portal/dashboard.php#',
        description: 'Explore where and why customers are abandoning cards',
        show: true,
      },
      {
        title: 'Successful customer 360',
        link: 'https://cj02.teratitan.com/',
        description: 'A full 360 view of a successful customer checkout and sale',
        show: true,
      }
    ];
    this.models = [
      {
        title: 'Marketing Command Center',
        link: 'http://dashboard02.teratitan.com/',
        description: 'Defined by policies, which combine users and groups, roles, permissions, and resources to determine access levels',
        show: true,
      },
      {
        title: 'Channel Interaction Services',
        link: 'http://cim02.teratitan.com/tcimadmin',
        description: 'Endpoint for managing development and deployment of containerized apps and “serverless” SQL functions',
        show: true,
      },
      {
        title: 'Data Capture Services',
        link: 'http://teratitan.com/Portal/dashboard.php#',
        description: 'Multi-container deployments into the Kubernetes infrastructure of Vantage are managed with these endpoints',
        show: true,
      },
      {
        title: 'Vantage Customer Experience',
        link: 'https://cj02.teratitan.com/',
        description: 'Ingest endpoints enable customers and developers to move data from edge nodes and devices into Vantage',
        show: true,
      }
    ];
    this.workflows = [
      {
        title: 'Apply Response Model Scoring',
        link: 'https://cj02.teratitan.com/workflow/flows/T000l6vbrvmw',
        description: 'Use the Lead Model Scores created by calling workflows to create CIM Responses',
        show: true,
      },
      {
        title: 'Customer Profile Decision Forest Scoring',
        link: 'https://cj02.teratitan.com/workflow/flows/T000l6vbrvrm',
        description: 'Use Decision Forest scoring against CIM Customer Profile Output to generate CIM Response',
        show: true,
      },
      {
        title: 'Customer Behavior Decision Forest Scoring',
        link: 'http://teratitan.com/Portal/dashboard.php#',
        description: 'Use Decision Forest scoring against CIM Customer Behavior Output to generate CIM Response',
        show: true,
      },
      {
        title: 'Customer Profile Generalized Linear Model Scoring',
        link: 'https://cj02.teratitan.com/',
        description: 'Use Generalized Linear Model scoring against CIM Customer Profile Output to generate CIM Response',
        show: true,
      }
    ];
  }
}
