import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdministratorOverviewComponent } from './administrator/overview/overview.component';
import { AnalystComponent } from './analyst/analyst.component';
import { AnalystOverviewComponent } from './analyst/overview/overview.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseOverviewComponent } from './browse/overview/overview.component';
import { BrowseDashboards } from './browse/dashboards/dashboards.component';
import { BrowseDetailDashboard } from './browse/dashboards/dashboard.component';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperOverviewComponent } from './developer/overview/overview.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { MonitoringOverviewComponent } from './monitoring/overview/overview.component';
import { AlertsComponent } from './monitoring/alerts/alerts.component';
import { AlertsCreateComponent } from './monitoring/alerts/create/create.component';
import { DashboardsComponent } from './monitoring/dashboards/dashboards.component';
import { DashboardsCreateComponent } from './monitoring/dashboards/create/create.component';
import { ReportsComponent } from './monitoring/reports/reports.component';
import { ReportsCreateComponent } from './monitoring/reports/create/create.component';
import { ReportsCreateOverviewComponent } from './monitoring/reports/create/overview/overview.component';
import { ReportsCreateOperationalComponent } from './monitoring/reports/create/operational/operational.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationsOverviewComponent } from './operations/overview/overview.component';
import { OperationsIdentityComponent } from './operations/identity/identity.component';
import { OperationsIdentityProvidersComponent } from './operations/identity/identity-providers/identity-providers.component';
import { DashboardComponent } from './monitoring/dashboards/dashboard/dashboard.component';
import { ReportComponent } from './monitoring/reports/report/report.component';

const routes: Routes = [
    {
      path: '', component: MainComponent, children: [
        { path: '', component: HomepageComponent },
        { path: 'administrator', component: AdministratorComponent, children: [
          { path: '', component: AdministratorOverviewComponent },
          ],
        },
        { path: 'analyst', component: AnalystComponent, children: [
          { path: '', component: AnalystOverviewComponent },
          ],
        },
        { path: 'browse', component: BrowseComponent, children: [
          { path: '', component: BrowseOverviewComponent },
          { path: 'dashboards', component: BrowseDashboards },
          { path: 'dashboard', component: BrowseDetailDashboard },
          ],
        },
        { path: 'developer', component: DeveloperComponent, children: [
          { path: '', component: DeveloperOverviewComponent },
          ],
        },
        { path: 'monitoring', component: MonitoringComponent, children: [
          { path: '', component: MonitoringOverviewComponent },
          { path: 'alerts', component: AlertsCreateComponent, children: [
            { path: '', component: AlertsCreateComponent },
            { path: 'create', component: AlertsCreateComponent },
            ],
          },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'dashboards', component: DashboardsCreateComponent, children: [
            { path: '', component: DashboardsCreateComponent },
            { path: 'create', component: DashboardsCreateComponent },
            ],
          },
          { path: 'report', component: ReportComponent },
          { path: 'reports', component: ReportsCreateComponent, children: [
            { path: '', component: ReportsCreateComponent },
            { path: 'create', component: ReportsCreateComponent, children: [
              { path: '', component: ReportsCreateOverviewComponent },
              { path: 'operational', component: ReportsCreateOperationalComponent },
              ],
            },
            ],
          },
          ],
        },
        { path: 'operations', component: OperationsComponent, children: [
          { path: '', component: OperationsOverviewComponent },
          { path: 'identity', component: OperationsIdentityComponent, children: [
              { path: '', component: OperationsIdentityProvidersComponent },
              ],
            },
          ],
        },
      ],
    },
    { path: '**', redirectTo: '/' },
];

export const appRoutes: any = RouterModule.forRoot(routes);
