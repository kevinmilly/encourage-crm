import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AnalyticsRoutingModule } from './analytics.routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ReportsComponent
  ],
  imports: [
    AnalyticsRoutingModule,
    SharedModule
  ]
})
export class AnalyticsModule { }
