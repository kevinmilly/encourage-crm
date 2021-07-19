import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsRoutingModule } from './analytics.routing.module';
import { SharedModule } from '@shared/shared.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    AnalyticsRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class AnalyticsModule { }
