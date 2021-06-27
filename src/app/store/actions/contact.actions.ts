import { Action, createAction, props } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum ContactActionTypes {
    LOAD_CONTACTS = "[CONTACTS] Load CONTACTS",
    LOAD_CONTACTS_FAIL = "[CONTACTS] Load CONTACTS Fail",
    LOAD_CONTACTS_SUCCESS = "[CONTACTS] Load CONTACTS Success"
}



export const loadContacts = createAction(
    ContactActionTypes.LOAD_CONTACTS
)

export const loadContactsFail = createAction(
    ContactActionTypes.LOAD_CONTACTS_FAIL,
    props<{error:any}>()
)
    
export const loadContactSuccess = createAction(
    ContactActionTypes.LOAD_CONTACTS_SUCCESS,
    props<{Contacts:fromOperations.Contact[]}>()
) 
      




