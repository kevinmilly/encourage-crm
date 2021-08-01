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
                    *ngIf="data.length > 0; else noData"
                    [data]="data"
                    [columns]="columns"
                    [displayNames]="displayNames"
                    [pipesNeeded]="pipeOptions"
                    [pipeType]="'contact'"
                    [linksNeeded]="['contactName']"
                    (onZoom)="detailContact($event)"
                  ></enccrm-table>
                  <ng-template #noData><h1>No Data Yet</h1></ng-template>
                </enccrm-general-card>
                </div> 

                // <ng-container *ngTemplateOutlet="friendMetric"> </ng-container>

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

  @ViewChild("friendMetric", { static: true })
  public friendMetric!: HTMLElement;
  @ViewChild("familyMetric", { static: true })
  public familyMetric!: HTMLElement;
  @ViewChild("nonRelationMetric", { static: true })
  public nonRelationMetric!: HTMLElement;
  @ViewChild("acquaintanceMetric", { static: true })
  public acquaintanceMetric!: HTMLElement;

  private subs = new SubSink();

  dataSub: Subscription = new Subscription;
  data: Contact[] = [];
  dataSaved: Contact[] = [];


  columns: string[] = [
    'contactName',
    'email',
    'phone',
    'contactType', //choices
    'priority', //choices
    'energyLevel', //choices
    'age',
    'birthDate',
    'otherDate',
    'known',//choices
    'description'
  ];
  displayNames: string[] = [
    'Name',
    'Email',
    'Phone',
    'Contact Type', //choices
    'Priority', //choices
    'Energy Level', //choices
    'Age',
    'Birth Date',
    'Other Date',
    'Known From', //choices
    'Description'
  ];

  contactTypes: string[] = [
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

  contacts$: Observable<fromOperations.Contact[]> | undefined;

  constructor(private store: Store, public dialog: MatDialog) { }

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
      this.data = data.map(d => ({...d, age: moment(new Date()).diff(moment(new Date(d.birthDate)), 'years')}));
      console.dir(this.data);
      this.dataSaved = [...data];
    });
    this.subs.sink = this.contactTypeFilter.valueChanges.subscribe(() => this.contactFilter());

  }

  contactFilter() {
    this.data = this.dataSaved.filter(d => this.contactTypeFilter.value.includes(ContactType[+d.contactType]));

  }

  detailContact(event: fromOperations.Contact) {
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
  getRelatedTemplateReference(contactType: number): any {
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
