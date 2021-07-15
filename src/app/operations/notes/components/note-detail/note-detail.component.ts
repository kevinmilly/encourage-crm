import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NoteType, Priorities, Statuses } from '@operations/notes';
import { Note } from '@operations/index';
import { IControlModel } from '@shared/models/control.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'enccrm-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  editOpen=false;
  note!: Note;
  notes$:Observable<Note[]> | undefined;

  noteTypeChoices = [ 
    { name: NoteType[0], value: 0 },
    { name: NoteType[1], value: 1 },
    { name: NoteType[2], value: 2 },
    { name: NoteType[3], value: 3 }
  ]
  priorities = [
    { name: Priorities[0], value: 0 },
    { name: Priorities[1], value: 1 },
    { name: Priorities[2], value: 2 },
    { name: Priorities[3], value: 3 },
    { name: Priorities[4], value: 4 },
  ]
  statuses = [
    { name: Statuses[0], value: 0 },
    { name: Statuses[1], value: 1 },
  ]

  editNoteControls: IControlModel[] = [];

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { note:Note, notes:Observable<Note[]>},
    private dialogRef: MatDialogRef<NoteDetailComponent>,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.note = this.data.note;
    this.notes$ = this.data.notes
    
    this.editNoteControls = [
      {
        displayName: "Name",
        controlName: "title",
        type: "string",
        required: true,
        default: '',
      },
      {
        displayName: "Note Type",
        controlName: "noteType",
        type: "stringChoice",
        required: true,
        default: 0,
        stringChoices: this.noteTypeChoices
      },
      {
        displayName: "How Important?",
        controlName: "priority",
        type: "stringChoiceSet",
        required: true,
        default: 1,
        stringChoices: this.priorities
      },
      {
        displayName: "Body",
        controlName: "body",
        type: "longString",
        required: true,
        default: ''
      }
    ];

  }

  submit(event:any) {


  }

}
