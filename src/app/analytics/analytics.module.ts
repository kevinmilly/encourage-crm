import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AnalyticsRoutingModule } from './analytics.routing.module';
import { SharedModule } from '@shared/shared.module';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DashboardComponent,
    ReportsComponent,
    MetricsComponent
  ],
  imports: [
    AnalyticsRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class AnalyticsModule { }
