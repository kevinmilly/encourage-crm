import { MetricsService } from '@analytics/services/metrics.service';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectContacts } from '@operations/index';
import { Contact, ContactType } from '@operations/contact';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'enccrm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() data: any;
  contacts: Contact[] = [];

  contactSub!: Subscription;

  topEnvironment!: string;
  mostImportantFriend!: Contact;
  mostDistantFriend!: Contact;
  highestRatedContact!: Contact;
  lowestRatedContact!: Contact;
  contactDistribution!: { cType: number, value: number }[];
  highestRatedFamilyMember!: Contact;
  mostDistantFamilyMember!: Contact;


  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Contact Volume', stack: 'a' },
  ];
  barChartLabels: string[] = [];

  // Pie
  public pieOptions: ChartOptions = {
    responsive: true,
  };
  public pieLabels: Label[] = [];
  public pieData: SingleDataSet = [];
  public pieType: ChartType = 'pie';
  public pieLegend = true;

  public chartColors: Color[] = [
    {
      backgroundColor: [
        '#FFF8DC',
        '#FFEBCD',
        '#FFE4C4',
        '#FFDEAD',
        '#F5DEB3',
        '#DEB887',
        '#D2B48C',
        '#BC8F8F',
        '#F4A460',
        '#DAA520',
        '#CD853F',
        '#D2691E',
        '#8B4513',
        '#A0522D',
        '#A52A2A'
      ]
    }
  ]

  public barChartColors: Color[] = [{ backgroundColor: ['	#BDB76B', '#FF4500'] }];

  constructor(private metricService: MetricsService, private store: Store<Contact>) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.contactSub = this.store.select(selectContacts).subscribe(contacts => {
      this.contacts = contacts

      this.topEnvironment = this.metricService
        .getMostFrequentEnvironment(this.contacts.filter(c => c.contactType === 0));
      this.mostImportantFriend = this.metricService
        .getHighestofSortedContacts(this.contacts.filter(c => c.contactType === 0));
      this.mostDistantFriend = this.metricService
        .getLowestofSortedContacts(this.contacts.filter(c => c.contactType === 0));
      this.highestRatedContact = this.metricService
        .getHighestofSortedContacts(this.contacts);
      this.lowestRatedContact = this.metricService
        .getLowestofSortedContacts(this.contacts);
      this.highestRatedFamilyMember = this.metricService
        .getHighestofSortedContacts(this.contacts.filter(c => ![0, 14, 13].includes(c.contactType)));
      this.mostDistantFamilyMember = this.metricService
        .getLowestofSortedContacts(this.contacts.filter(c => ![0, 14, 13].includes(c.contactType)));

      this.contactDistribution = this.metricService
        .getContactDistribution(this.contacts)

      this.buildCharts(this.contactDistribution);


    });
  }

  buildCharts(contactDistribution: { cType: number, value: number }[]) {
    contactDistribution.forEach(distribution => {
      this.pieLabels.push(ContactType[distribution.cType]);
      this.pieData.push(distribution.value);

      this.barChartLabels.push(ContactType[distribution.cType]);
      this.barChartData[0].data?.push(distribution.value);


    });


  }

}
