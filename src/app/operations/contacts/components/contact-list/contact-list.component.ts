import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromOperations from '@operations/index';

@Component({
  selector: 'enccrm-contact-list',
  template: `
      <enccrm-tab [labels]="['Family','Friends','Acquaintances']">
        <div id="first">
          <h1>Family</h1>
            <enccrm-general-card>
              <enccrm-table></enccrm-table>
            </enccrm-general-card>
          </div>
          <div id="second">
            <h1>Friends</h1>
              <enccrm-general-card>
                <enccrm-table></enccrm-table>
              </enccrm-general-card>
          </div>
          <div id="third">
            <h1>Acquaintances</h1>
              <enccrm-general-card>
                <enccrm-table></enccrm-table>
              </enccrm-general-card>
          </div>
      </enccrm-tab>
  `,
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  data:fromOperations.Contact[] = [];

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.select()
  }

}
