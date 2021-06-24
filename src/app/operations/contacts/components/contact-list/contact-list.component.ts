import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-contact-list',
  template: `
          <enccrm-general-card>
            <enccrm-table></enccrm-table>
          </enccrm-general-card>
  `,
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
