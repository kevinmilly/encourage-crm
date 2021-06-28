import { Action, createAction, props, union } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum ContactActionTypes {
    LOAD_CONTACTS = "[CONTACTS] Load CONTACTS",
    LOAD_CONTACTS_FAIL = "[CONTACTS] Load CONTACTS Fail",
    LOAD_CONTACTS_SUCCESS = "[CONTACTS] Load CONTACTS Success",

}

export const contactActions = {
    loadContacts: createAction(ContactActionTypes.LOAD_CONTACTS),
    loadContactsFail: createAction(
        ContactActionTypes.LOAD_CONTACTS_FAIL,
        props<{error:any}>()
    ),
    loadContactSuccess: createAction(
        ContactActionTypes.LOAD_CONTACTS_SUCCESS,
        props<{contacts:fromOperations.Contact[]}>()
    ),
    addContact:,
    addContactFail:,
    addContactSuccess:,
    updateContact:,
    updateContactFail:,
    updateContactSuccess:,
    deleteContact:,
    deleteContactFail:,
    deleteContactSuccess:,

}

      