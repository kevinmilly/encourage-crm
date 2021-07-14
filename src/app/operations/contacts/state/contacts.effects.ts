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
   concatMap(action => {
 
       return this.backend.addContact(action.contact).pipe(
         map((contact:Contact) => fromContactAction.contactActions.addContactSuccess({contact}))
     )
   }),
   catchError(() => EMPTY)
 )
);

updateContacts$ = createEffect(() => 
    this.actions$.pipe( 
    ofType(fromContactAction.contactActions.updateContact),
    concatMap((action) => {
      return this.backend.updateContact(action.contact).pipe(
        map((contact:Contact) => fromContactAction.contactActions.updateContactSuccess({contact}))
      )
    }),
    catchError(error => of(fromContactAction.contactActions.updateContactFail({error})))
    )
);

deleteContacts$ = createEffect(() => 
    this.actions$.pipe( 
    ofType(fromContactAction.contactActions.deleteContact),
    concatMap((action) => {
      return this.backend.deleteContact(action.contact).pipe(
        map((contact:Contact) => fromContactAction.contactActions.deleteContactSuccess({contact}))
      )
    }),
    catchError(error => of(fromContactAction.contactActions.deleteContactFail({error})))
    )
);


  constructor(private actions$: Actions, private backend:BackendService) {}

}
