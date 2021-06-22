import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-tab',
  template: `
  <enccrm-general-card>
      <mat-tab-group>
          <mat-tab label="{{labels[0]}}" > 
              <ng-content select="#first" class="tab-content"></ng-content>
          </mat-tab>
          <mat-tab label="{{labels[1]}}" > 
              <ng-content select="#second" class="tab-content"></ng-content>
          </mat-tab>
          <mat-tab *ngIf="labels.length > 2" label="{{labels[2]}}"> 
              <ng-content select="#third" class="tab-content"></ng-content>
          </mat-tab>
        </mat-tab-group>
</enccrm-general-card>
            `,
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() labels: string[] = [];
  @Input() selectedIndex:number=0;;

  constructor() { }

  ngOnInit(): void {
  }

}
