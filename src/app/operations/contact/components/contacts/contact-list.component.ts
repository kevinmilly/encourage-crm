import { Component, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Contact, ContactOptions, ContactType } from '@operations/contact';

import * as fromOperations from '@operations/index';
import { Note, Task } from '@operations/index';
import { selectNotes } from '@operations/note/state';
import { taskActions } from '@operations/task/state';
import { selectTasks } from '@operations/task/state/selectors/task.selectors';
import * as moment from 'moment';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';
import * as fromContactState from '../../state/index';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';


@Component({
  selector: 'enccrm-contact-list',
  template: `
          <header>
            <h1>Contact List</h1>
          </header>
          <main>
              <div class="container">
                <enccrm-general-card> 
                  <mat-form-field appearance="fill">
                    <mat-label>Contact Types</mat-label>
                    <mat-select [formControl]="contactTypeFilter" multiple>
                      <mat-option *ngFor="let type of contactTypes" [value]="type">{{type}}</mat-option>
                    </mat-select>
                  </mat-form-field>
                  <enccrm-table
                    *ngIf="contactsRetrieved.length > 0; else noData"
                    [data]="contactsRetrieved"
                    [columns]="columnsForTable"
                    [displayNames]="columnHeaderNames"
                    [pipesNeeded]="pipeOptions"
                    [pipeType]="'contact'"
                    [linksNeeded]="['contactName']"
                    (onZoom)="detailContact($event)"
                  ></enccrm-table>
                  <ng-template #noData><h1>No Data Yet</h1></ng-template>
                </enccrm-general-card>
                </div> 

            

                <ng-template #friendMetric let-rating="rating" let-diagnosis="diagnosis">
                    <h3>Friendship Rating:</h3>
                      <div class="metric-detail">
                          <h4 [style.color]="rating | ratingColor">{{rating}}/100</h4>
                          <h5>{{diagnosis}}</h5>
                      </div>
                </ng-template> 

                <ng-template #familyMetric let-rating="rating" let-diagnosis="diagnosis">
                    <h3>Family Member Rating:</h3>
                    <div class="metric-detail">
                      <h4 [style.color]="rating | ratingColor">{{rating}}/100</h4>
                      <h5>{{diagnosis}}</h5>
                    </div>
                </ng-template>

                <ng-template #nonRelationMetric let-rating="rating" let-diagnosis="diagnosis">
                    <h3>Network Value Rating:</h3>
                    <div class="metric-detail">
                        <h4 [style.color]="rating | ratingColor">{{rating}}/100</h4>
                        <h5>{{diagnosis}}</h5>
                    </div>
                </ng-template>

                <ng-template #acquaintanceMetric let-rating="rating" let-diagnosis="diagnosis">
                  <h3>Potential Friendship Rating:</h3>
                    <div class="metric-detail">
                      <h4 [style.color]="rating | ratingColor">{{rating}}/100</h4>
                      <h5>{{diagnosis}}</h5>
                    </div>
              </ng-template>
          </main>
  `,
  styleUrls: ['./contacts.component.scss']
})
export class ContactListComponent implements OnInit {

  //  These will be used to pass custom html into the contact detail modal
  @ViewChild("friendMetric", { static: true })
  public friendMetric!: HTMLElement;
  @ViewChild("familyMetric", { static: true })
  public familyMetric!: HTMLElement;
  @ViewChild("nonRelationMetric", { static: true })
  public nonRelationMetric!: HTMLElement;
  @ViewChild("acquaintanceMetric", { static: true })
  public acquaintanceMetric!: HTMLElement;

  private subs:SubSink;
  contactsRetrievedSub: Subscription;
  contactsRetrieved: Contact[] = [];
  contactsRetrievedSaved: Contact[] = [];


  columnsForTable: string[];

  columnHeaderNames: string[];

  contactTypes: string[];

  pipeOptions: string[];
  contactTypeFilter: FormControl;

  contacts$: Observable<fromOperations.Contact[]> | undefined;

  constructor(private store: Store, public dialog: MatDialog) {

    this.subs = new SubSink();
    this.contactsRetrievedSub = new Subscription;

    this.contactTypes = [
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

    this.contactTypeFilter = new FormControl(this.contactTypes);
    this.pipeOptions = [
      ContactOptions[0],
      ContactOptions[1],
      ContactOptions[2],
      ContactOptions[3],
      ContactOptions[4]
    ]
    this.contactTypeFilter = new FormControl;

    this.columnsForTable = [
      'contactName',
      'email',
      'phone',
      'contactType', 
      'priority', 
      'energyLevel', 
      'age',
      'birthDate',
      'otherDate',
      'known',
      'description'
    ];
    this.columnHeaderNames = [
      'Name',
      'Email',
      'Phone',
      'Contact Type', 
      'Priority', 
      'Energy Level', 
      'Age',
      'Birth Date',
      'Other Date',
      'Known From', 
      'Description'
    ];

  }

  ngOnInit(): void {

    this.loadStateThenContacts();

    //setup Filter
    this.subs.sink = this.contactTypeFilter.valueChanges.subscribe(() => this.contactFilter());

  }

  /**
   * Gathers state from store and sets it up contact data for component
   */
  loadStateThenContacts(): void {
    this.store.dispatch(fromContactState.contactActions.loadContacts());
    this.store.dispatch(taskActions.loadTasks());
    
    this.contacts$ = this.store.select(fromContactState.selectContacts);

    //gathering data for table display, and adding age calculation dynamically
    this.subs.sink = this.contacts$.subscribe(data => {
      this.contactsRetrieved = data.map(d => ({...d, age: moment(new Date()).diff(moment(new Date(d.birthDate)), 'years')}));
      this.contactsRetrievedSaved = [...data];
    });
  }

  /**
   * Reacts to user contact type filtering on UI
   */
  contactFilter() {
    this.contactsRetrieved = this.contactsRetrievedSaved.filter(d => this.contactTypeFilter.value.includes(ContactType[+d.contactType]));

  }

  /**
   * 
   * Launches a modal showing more details of the contact clicked from the table.
   * The data passed to the modal include notes, tasks, and metrics related to the contact.
   * The modal will allow editing of the contact, updating upon close of the modal.
   * @param event (Contact) a reference to the contact clicked on in the table
   */
  detailContact(event: fromOperations.Contact):void {
    const dialogRef = this.dialog.open(ContactDetailComponent, {
      panelClass: 'detail-modal',
      data: {
        contact: event,
        tasks: this.store.select(selectTasks).pipe(map((tasks: Task[]) => tasks.filter(task => task.contact.value === event.id))),
        notes: this.store.select(selectNotes).pipe(map((notes: Note[]) => notes.filter(note => note.contact.value === event.id))),
        metric: this.getRelatedTemplateReference(+event.contactType)

      }
    });

    dialogRef.afterClosed().subscribe(result => {
        const update: Update<fromOperations.Contact> = {
          id: event.id,
          changes: event
        }
        console.log({result});
        this.store.dispatch(fromContactState.contactActions.updateContact({contact: update}));
    });
  }

  /**
   * 
   * @param contactType enum indexes on ContactType enum
   * @returns HTMLElement the applicable template reference
   */
  getRelatedTemplateReference(contactType: number): HTMLElement {
    switch (contactType) {
      case 13:
        return this.nonRelationMetric
      case 0:
        return this.friendMetric
      case 14:
        return this.acquaintanceMetric
      default:
        return this.familyMetric
    }
  }

  deleteContactInDB(event: fromOperations.Contact) {
    console.log("Need to implement");
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }


}
