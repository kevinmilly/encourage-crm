import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-communication-list',
  template: `
            <enccrm-general-card> 
                <enccrm-table></enccrm-table>
            </enccrm-general-card>
  `,
  styleUrls: ['./communication-list.component.scss']
})
export class CommunicationListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
