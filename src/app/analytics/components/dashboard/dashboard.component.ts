import { MetricsService } from '@analytics/services/metrics.service';
import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip,  Color } from 'ng2-charts';

@Component({
  selector: 'enccrm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() data:any;

  topContexts!:{context:string, amount:number};
  mostImportantFriend:string = '';

  
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Contact Volume', stack: 'a' },

  ];

constructor(private metric:MetricsService) {
  monkeyPatchChartJsTooltip(); 
  monkeyPatchChartJsLegend();
 }

  ngOnInit(): void {
  }

  buildPie(filterType:string) {
    this.pieLabels = [];
    this.pieData = [];

    
    this.pieLabels.push();
    this.pieData.push();
        
 
    
  }

  buildBarChart() {
   

    
    this.barChartData.data = [];
    this.barChartLabels = [];

    this.barChartData.data.push();
    this.barChartLabels.push();

  
    

  }


}
