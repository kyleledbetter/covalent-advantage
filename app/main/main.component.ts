import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covalent-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  APP_TITLE = 'VANTAGE';

  // Current date
  year: any = new Date().getFullYear();

  // Sidenav routes
  routes: Object[] = [];
  operations: Object[] = [];
  admin: Object[] = [];
  developer: Object[] = [];
  analyst: Object[] = [];

  constructor(
    private _router: Router) {
  }

  ngOnInit(): void {
    this.routes = [
      {
        title: 'Homepage',
        route: '/',
        icon: 'home',
        show: true,
      },
      {
        title: 'Browse',
        route: '/browse',
        icon: 'store',
        show: true,
      },
      {
        title: 'Monitor',
        route: '/monitoring',
        icon: 'insert_chart',
        show: true,
      }
    ];
    this.analyst = [
      {
        title: 'Analyst Homepage',
        route: '/analyst',
        icon: 'view_compact',
        show: true,
      },
      /*
      {
        title: 'Path',
        link: 'https://vantage-path-analyzer.ac02.teratitan.com/',
        icon: 'call_split',
        show: true,
      },
      {
        title: 'Model',
        link: 'https://vantage-modeler.ac02.teratitan.com/',
        icon: 'line_style',
        show: true,
      },
      {
        title: 'Workflow',
        link: 'https://cj02.teratitan.com/workflow/flows',
        icon: 'clear_all',
        show: true,
      }
      */
    ];
    this.operations = [
      {
        title: 'Operations Homepage',
        route: '/operations',
        icon: 'settings_applications',
        show: true,
      },
      {
        title: 'Engines',
        route: '/operations',
        icon: 'developer_board',
        show: true,
      },
      {
        title: 'Resources',
        route: '/operations',
        icon: 'memory',
        show: true,
      },
      {
        title: 'Network',
        route: '/operations',
        icon: 'group_work',
        show: true,
      },
      {
        title: 'Deployments',
        route: '/operations',
        icon: 'cloud_upload',
        show: true,
      },
      {
        title: 'APIs & Services',
        route: '/operations',
        icon: 'cast_connected',
        show: true,
      },
      {
        title: 'SSO & IAM',
        route: '/operations/identity',
        icon: 'person_pin',
        show: true,
      }
    ];
    this.admin = [
      {
        title: 'Administrator Homepage',
        route: '/administrator',
        icon: 'verified_user',
        show: true,
      },
      {
        title: 'Systems',
        route: '/',
        icon: 'dns',
        show: true,
      },
      {
        title: 'Databases',
        route: '/browse',
        icon: 'storage',
        show: true,
      },
      {
        title: 'Sandboxes',
        route: '/monitoring',
        icon: 'gradient',
        show: true,
      },
      {
        title: 'Data Streams & Sources',
        route: '/deployments',
        icon: 'satellite',
        show: true,
      },
      {
        title: 'Object Store',
        route: '/deployments',
        icon: 'art_track',
        show: true,
      },
      {
        title: 'Users',
        route: '/apis',
        icon: 'contacts',
        show: true,
      }
    ];
    this.developer = [
      {
        title: 'Developer Homepage',
        route: '/developer',
        icon: 'desktop_mac',
        show: true,
      },
      /*
      {
        title: 'Editor',
        route: '/browse',
        icon: 'code',
        show: true,
      },
      {
        title: 'APIs',
        route: '/monitoring',
        icon: 'widgets',
        show: true,
      },
      */
    ];
  }
  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('vantage.theme');
  }
  theme(theme: string = undefined): void {
    if (!theme) {
      localStorage.removeItem('vantage.theme');
    } else {
      localStorage.setItem('vantage.theme', theme);
    }
    document.getElementsByTagName('body').item(0).className = theme;
  }
}