import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Note, NoteOptions, NoteType } from '@operations/contacts';

import * as fromOperations from '@operations/index';
import { Task } from '@operations/index';
import { taskActions } from '@operations/task/state';
import { selectTasks } from '@operations/task/state/selectors/task.selectors';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';
import * as fromNoteState from '../../state/index';
import { NoteDetailComponent } from '../note-detail/note-detail.component';

 
@Component({
  selector: 'enccrm-contact-list',
  template: `
          <h1>Note List</h1>
          <div class="container">
            <enccrm-general-card> 
            <mat-form-field appearance="fill">
              <mat-label>Note Types</mat-label>
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
                (onZoom)="detailNote($event)"
              ></enccrm-table>
              <ng-template #noData><h1>No Data Yet</h1></ng-template>
            </enccrm-general-card>
            </div> 
  `,
  styleUrls: ['./contact-list.component.scss']
})
export class NoteListComponent implements OnInit {
  
  private subs = new SubSink();

  dataSub: Subscription = new Subscription;
  data:Note[] = [];
  dataSaved:Note[] = []; 


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
    'Note Type', //choices
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
    NoteType[0],
    NoteType[1],
    NoteType[2],
    NoteType[3],
    NoteType[4],
    NoteType[5],
    NoteType[6],
    NoteType[7],
    NoteType[8],
    NoteType[9],
    NoteType[10],
    NoteType[11],
    NoteType[12],
    NoteType[13],
    NoteType[14]
  ]

  pipeOptions: string[] = [];
  contactTypeFilter: FormControl = new FormControl;

  contacts$:Observable<fromOperations.Note[]> | undefined;

  constructor(private store:Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactTypeFilter = new FormControl(this.contactTypes);
    this.pipeOptions = [
      NoteOptions[0],
      NoteOptions[1],
      NoteOptions[2],
      NoteOptions[3],
      NoteOptions[4]
    ]

    this.store.dispatch(fromNoteState.contactActions.loadNotes());
    this.store.dispatch(taskActions.loadTasks());
    
    this.contacts$ = this.store.select(fromNoteState.selectNotes);

    this.subs.sink = this.contacts$.subscribe(data => {
      this.data = data;
    });
    this.subs.sink = this.contactTypeFilter.valueChanges.subscribe(() => this.contactFilter());

  }

  contactFilter() {
    this.data = this.dataSaved.filter(d => this.contactTypeFilter.value.includes(d.contactType));
  }

  detailNote(event:fromOperations.Note) {
      const dialogRef = this.dialog.open(NoteDetailComponent, {
      width: '90vw',
      height: '45rem',
      data: { 
        contact:event,
        tasks: this.store.select(selectTasks).pipe(map((tasks:Task[]) => tasks.filter(task => task.contact.value === event.id)))
        
      } 
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if(result.action === 'delete') {
        this.store.dispatch(fromNoteState.contactActions.deleteNote(result.contact));
      } else { //add

      }

    });
  }

  deleteNote(event:fromOperations.Note) {
    console.log("Need to implement");
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }


}
