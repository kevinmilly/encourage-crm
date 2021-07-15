import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromNoteState from "../../state/index";
import { Note } from "@operations/notes/index";

import { NoteType, Priorities } from '@operations/notes';
import { Statuses } from '@operations/notes/models/enums/statuses.enum';
import { IControlModel } from '@shared/models/control.model';

@Component({
  selector: 'enccrm-add-note',
  template: `
  <enccrm-general-card>
    <enccrm-form
      [controlsToCreate]="addNoteControls"
      (onSubmit)="submit($event)"
    >
      <div 
      horizontal
      > 
       Add a new Note
    </div> 
    </enccrm-form>
  </enccrm-general-card>
  `,
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

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

  addNoteControls: IControlModel[] = [
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

  constructor(private store: Store) { };

  ngOnInit(): void {
   
  }

  submit(note:Note) {
    this.store.dispatch(fromNoteState.noteActions.addContact({note}));
  }

}
