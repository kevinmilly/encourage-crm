import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';

import * as fromOperations from '@operations/index';
import { Observable, of } from 'rxjs';
import * as fromContactState from '../../state/index';

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

  data$:Observable<fromOperations.Contact[]> | undefined;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(fromContactState.contactActions.loadContacts());
    this.data$ = this.store.select(fromContactState.selectContacts);
    // this.store.pipe(select(fromContactState.selectContacts))
  }

}
