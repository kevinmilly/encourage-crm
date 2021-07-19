import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';

import * as fromNotesAction from '../actions/notes.actions';
import { BackendService } from '@core/services/backend.service';
import { Note } from '@operations/note/models/interfaces/note';
import { EMPTY, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable()
export class NoteEffects {

  loadNotes$ = createEffect(() =>

    this.actions$.pipe(
      ofType(fromNotesAction.noteActions.loadNotes),
      concatMap(() => {
        return this.backend.getNotesFromDB().pipe(
          map((notes: Note[]) => fromNotesAction.noteActions.loadNoteSuccess({ notes }))
        )
      }),
      catchError(error => of(fromNotesAction.noteActions.loadNotesFail({ error })))
    )
  );

  addNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromNotesAction.noteActions.addNote),
      concatMap(action => {

        return this.backend.addNoteInDB(action.note).pipe(
          map((note: Note) => fromNotesAction.noteActions.addNoteSuccess({ note }))
        )
      }),
      catchError(() => EMPTY)
    )
  );

  updateNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromNotesAction.noteActions.updateNote),
      concatMap((action) => {
        return this.backend.updateNoteInDB(action.note).pipe(
          map((note: Note) => fromNotesAction.noteActions.updateNoteSuccess({ note }))
        )
      }),
      catchError(error => of(fromNotesAction.noteActions.updateNoteFail({ error })))
    )
  );

  deleteNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromNotesAction.noteActions.deleteNote),
      concatMap((action) => {
        return this.backend.deleteNoteInDB(action.note).pipe(
          map((note: Note) => fromNotesAction.noteActions.deleteNoteSuccess({ note }))
        )
      }),
      catchError(error => of(fromNotesAction.noteActions.deleteNoteFail({ error })))
    )
  );

  constructor(private actions$: Actions, private backend: BackendService) { }

}
