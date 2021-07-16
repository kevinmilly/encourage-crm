import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Note, NoteOptions, NoteType } from '@operations/notes';

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
  selector: 'enccrm-note-list',
  template: `
          <h1>Note List</h1>
          <div class="container">
            <enccrm-general-card> 
            <mat-form-field appearance="fill">
              <mat-label>Note Types</mat-label>
              <mat-select [formControl]="noteTypeFilter" multiple>
                <mat-option *ngFor="let type of noteTypes" [value]="type">{{type}}</mat-option>
              </mat-select>
            </mat-form-field>
              <enccrm-table
                *ngIf="data.length > 0; else noData"
                [data]="data"
                [columns]="columns"
                [displayNames]="displayNames"
                [pipesNeeded]="pipeOptions"
                [pipeType]="'note'"
                [linksNeeded]="['title']"
                (onZoom)="detailNote($event)"
              ></enccrm-table>
              <ng-template #noData><h1>No Data Yet</h1></ng-template>
            </enccrm-general-card>
            </div> 
  `,
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  
  private subs = new SubSink();

  dataSub: Subscription = new Subscription;
  data:Note[] = [];
  dataSaved:Note[] = []; 


  columns:string[] = [
    'title', //choices
    'noteType', //choices
    'priority',
    'contact',
    'body',
  ];
  displayNames:string[] = [
    'Title',
    'Note Type',
    'Priority', //choices
    'Contact', 
    'Body' //choices
  ];
 
  noteTypes:string[] = [
    NoteType[0],
    NoteType[1],
    NoteType[2],
    NoteType[3]
  ]

  pipeOptions: string[] = [];
  noteTypeFilter: FormControl = new FormControl;

  notes$:Observable<fromOperations.Note[]> | undefined;

  constructor(private store:Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.noteTypeFilter = new FormControl(this.noteTypes);
    this.pipeOptions = [
      NoteOptions[0],
      NoteOptions[1],
      NoteOptions[2],
      NoteOptions[3]
    ]

    this.store.dispatch(fromNoteState.noteActions.loadNotes());
    this.store.dispatch(taskActions.loadTasks());
    
    this.notes$ = this.store.select(fromNoteState.selectNotes);

    this.subs.sink = this.notes$.subscribe(data => {
      this.data = data;
    });
    this.subs.sink = this.noteTypeFilter.valueChanges.subscribe(() => this.noteFilter());

  }

  noteFilter() {
    this.data = this.dataSaved.filter(d => this.noteTypeFilter.value.includes(d.noteType));
  }

  detailNote(event:fromOperations.Note) {
      const dialogRef = this.dialog.open(NoteDetailComponent, {
      width: '90vw',
      height: '45rem',
      data: { 
        note:event
      } 
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if(result.action === 'delete') {
        this.store.dispatch(fromNoteState.noteActions.deleteNote(result.note));
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
