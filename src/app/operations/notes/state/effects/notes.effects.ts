import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as NotesActions from '../actions/notes.actions';



@Injectable()
export class NotesEffects {

  loadNotess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NotesActions.loadNotess),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => NotesActions.loadNotessSuccess({ data })),
          catchError(error => of(NotesActions.loadNotessFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
