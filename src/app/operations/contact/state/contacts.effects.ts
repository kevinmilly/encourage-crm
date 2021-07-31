import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';

import * as fromContactAction from './contact.actions';
import { BackendService } from '@core/services/backend.service';
import { Contact } from '@operations/contact/models/interfaces/contact';
import { EMPTY, of } from 'rxjs';


@Injectable()
export class ContactEffects {


  loadContacts$ = createEffect(() =>

    this.actions$.pipe(
      ofType(fromContactAction.contactActions.loadContacts),
      concatMap(() => {
        return this.backend.getContactsFromDB().pipe(
          map((contacts: Contact[]) => fromContactAction.contactActions.loadContactSuccess({ contacts }))
        )
      }),
      catchError(error => of(fromContactAction.contactActions.loadContactsFail({ error })))
    )
  );

  addContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromContactAction.contactActions.addContact),
      concatMap(action => {

        return this.backend.addContactToDB(action.contact).pipe(
          map((contact: Contact) => fromContactAction.contactActions.addContactSuccess({ contact }))
        )
      }),
      catchError(() => EMPTY)
    )
  );

  updateContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromContactAction.contactActions.updateContact),
      concatMap((action) => 
         this.backend.updateContactInDB(action.contact.id, action.contact.changes)
      ),
    ),
    {dispatch: false}
  );

  deleteContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromContactAction.contactActions.deleteContact),
      concatMap((action) => {
        return this.backend.deleteContactInDB(action.contact).pipe(
          map((contact: Contact) => fromContactAction.contactActions.deleteContactSuccess({ contact }))
        )
      }),
      catchError(error => of(fromContactAction.contactActions.deleteContactFail({ error })))
   )
  ); 


  constructor(private actions$: Actions, private backend: BackendService) { }

}