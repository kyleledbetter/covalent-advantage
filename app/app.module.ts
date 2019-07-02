import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

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
import { ReportEditorComponent } from './monitoring/reports/create/editor/editor.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationsOverviewComponent } from './operations/overview/overview.component';
import { OperationsIdentityComponent } from './operations/identity/identity.component';
import { OperationsIdentityProvidersComponent } from './operations/identity/identity-providers/identity-providers.component';
import { DashboardComponent } from './monitoring/dashboards/dashboard/dashboard.component';
import { ReportComponent } from './monitoring/reports/report/report.component';

import { MatButtonModule, MatListModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule, MatIconModule,
         MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
         MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
         MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule, MatCheckboxModule, MatTableModule, MatChipsModule } from '@angular/material';

import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
         CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
         CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';


import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

@NgModule({
  declarations: [ 
    AppComponent,
    MainComponent,
    HomepageComponent,
    AdministratorComponent,
    AdministratorOverviewComponent,
    AlertsComponent,
    AlertsCreateComponent,
    AnalystComponent,
    AnalystOverviewComponent,
    BrowseComponent,
    BrowseOverviewComponent,
    BrowseDashboards,
    BrowseDetailDashboard,
    DashboardsComponent,
    DashboardsCreateComponent,
    DeveloperComponent,
    DeveloperOverviewComponent,
    MonitoringComponent,
    MonitoringOverviewComponent,
    OperationsComponent,
    OperationsOverviewComponent,
    OperationsIdentityComponent,
    OperationsIdentityProvidersComponent,
    DashboardComponent,
    ReportsComponent,
    ReportsCreateComponent,
    ReportsCreateOverviewComponent,
    ReportsCreateOperationalComponent,
    ReportEditorComponent,
    ReportComponent ],
  imports:      [
    appRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTableModule,
    MatChipsModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    /** Echarts **/
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentLineEchartsModule,
    CovalentTooltipEchartsModule,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
