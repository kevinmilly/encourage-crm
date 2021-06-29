import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';

import * as fromContactAction from './contact.actions';
import { BackendService } from '@core/services/backend.service';
import { Contact } from '@operations/contacts/models/interfaces/contact';
import { EMPTY, of } from 'rxjs';


@Injectable()
export class ContactEffects {
  

loadContacts$ = createEffect(() => 
    this.actions$.pipe( 
    ofType(fromContactAction.contactActions.loadContacts),
    concatMap(() => {
      return this.backend.getContacts().pipe(
        map((contacts:Contact[]) => fromContactAction.contactActions.loadContactSuccess({contacts}))
      )
    }),
    catchError(error => of(fromContactAction.contactActions.loadContactsFail({error})))
  )
);

addContacts$ = createEffect(() => 
  this.actions$.pipe( 
   ofType(fromContactAction.contactActions.addContact),
   concatMap(() => {
     return this.backend.getContacts().pipe(
       map((contacts:Contact[]) => fromContactAction.contactActions.addContactSuccess())
     )
   }),
   catchError(() => EMPTY)
 )
);

updateContacts$ = createEffect(() => 
    this.actions$.pipe( 
    ofType(fromContactAction.contactActions.updateContacts),
    concatMap(() => {
      return this.backend.getContacts().pipe(
        map((contacts:Contact[]) => fromContactAction.contactActions.loadContactSuccess({contacts}))
      )
    }),
    catchError(() => EMPTY)
    )
);

deleteContacts$ = createEffect(() => 
    this.actions$.pipe( 
    ofType(fromContactAction.contactActions.deleteContacts),
    concatMap(() => {
      return this.backend.getContacts().pipe(
        map((contacts:Contact[]) => fromContactAction.contactActions.loadContactSuccess({contacts}))
      )
    }),
    catchError(() => EMPTY)
    )
);


  constructor(private actions$: Actions, private backend:BackendService) {}

}
