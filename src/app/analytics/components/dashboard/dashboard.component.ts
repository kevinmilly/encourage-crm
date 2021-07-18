import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() data:any;

  topContexts!:{context:string, amount:number};
  mostImportantFriend:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
