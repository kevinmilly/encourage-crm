import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Contact, ContactOptions, ContactType } from '@operations/contacts';

import * as fromOperations from '@operations/index';
import { Task } from '@operations/index';
import { taskActions } from '@operations/task/state';
import { selectTasks } from '@operations/task/state/selectors/task.selectors';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';
import * as fromContactState from '../../state/index';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

 
@Component({
  selector: 'enccrm-contact-list',
  template: `
          <h1>Contact List</h1>
          <div class="container">
            <enccrm-general-card> 
            <mat-form-field appearance="fill">
              <mat-label>Contact Types</mat-label>
              <mat-select [formControl]="contactTypeFilter" multiple>
                <mat-option *ngFor="let type of contactTypes" [value]="type">{{type}}</mat-option>
              </mat-select>
            </mat-form-field>
              <enccrm-table
                *ngIf="data.length > 0; else noData"
                [data]="data"
                [columns]="columns"
                [displayNames]="displayNames"
                [pipesNeeded]="pipeOptions"
                [linksNeeded]="['contactName']"
                (onZoom)="detailContact($event)"
              ></enccrm-table>
              <ng-template #noData><h1>No Data Yet</h1></ng-template>
            </enccrm-general-card>
            </div> 
  `,
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
  private subs = new SubSink();

  dataSub: Subscription = new Subscription;
  data:Contact[] = [];
  dataSaved:Contact[] = []; 


  columns:string[] = [
    'contactName',
    'email',
    'phone',
    'contactType', //choices
    'priority', //choices
    'energyLevel', //choices
    'notes',
    'age',
    'birthDate',
    'otherDate',
    'known',//choices
    'description'
  ];
  displayNames:string[] = [
    'Name', 
    'Email',
    'Phone',
    'Contact Type', //choices
    'Priority', //choices
    'Energy Level', //choices
    'Notes',
    'Age',
    'Birth Date',
    'Other Date',
    'Known From', //choices
    'Description'
  ];
 
  contactTypes:string[] = [
    ContactType[0],
    ContactType[1],
    ContactType[2],
    ContactType[3],
    ContactType[4],
    ContactType[5],
    ContactType[6],
    ContactType[7],
    ContactType[8],
    ContactType[9],
    ContactType[10],
    ContactType[11],
    ContactType[12],
    ContactType[13],
    ContactType[14]
  ]

  pipeOptions: string[] = [];
  contactTypeFilter: FormControl = new FormControl;

  contacts$:Observable<fromOperations.Contact[]> | undefined;

  constructor(private store:Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactTypeFilter = new FormControl(this.contactTypes);
    this.pipeOptions = [
      ContactOptions[0],
      ContactOptions[1],
      ContactOptions[2],
      ContactOptions[3],
      ContactOptions[4]
    ]

    this.store.dispatch(fromContactState.contactActions.loadContacts());
    this.store.dispatch(taskActions.loadTasks());
    
    this.contacts$ = this.store.select(fromContactState.selectContacts);

    this.subs.sink = this.contacts$.subscribe(data => {
      this.data = data;
    });
    this.subs.sink = this.contactTypeFilter.valueChanges.subscribe(() => this.contactFilter());

  }

  contactFilter() {
    this.data = this.dataSaved.filter(d => this.contactTypeFilter.value.includes(d.contactType));
  }

  detailContact(event:fromOperations.Contact) {
      const dialogRef = this.dialog.open(ContactDetailComponent, {
      width: '90vw',
      height: '45rem',
      data: { 
        contact:event,
        tasks: this.store.select(selectTasks).pipe(map((tasks:Task[]) => tasks.filter(task => task.contact.value === event.id)))
        
      } 
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if(result.action === 'delete') {
        this.store.dispatch(fromContactState.contactActions.deleteContact(result.contact));
      } else { //add

      }

    });
  }

  deleteContact(event:fromOperations.Contact) {
    console.log("Need to implement");
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }


}
