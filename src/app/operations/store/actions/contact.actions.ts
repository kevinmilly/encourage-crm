import { Action, createAction, props, union } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum ContactActionTypes {
    LOAD_CONTACTS = "[CONTACTS COMPONENT] Load CONTACTS",
    LOAD_CONTACTS_FAIL = "[CONTACTS EFFECT] Load CONTACTS Fail",
    LOAD_CONTACTS_SUCCESS = "[CONTACTS EFFECT] Load CONTACTS Success",
    ADD_CONTACTS = "[CONTACTS] Add CONTACTS",
    ADD_CONTACTS_FAIL = "[CONTACTS] Add CONTACTS Fail",
    ADD_CONTACTS_SUCCESS = "[CONTACTS] Add CONTACTS Success",
    UPDATE_CONTACTS = "[CONTACTS] Update CONTACTS",
    UPDATE_CONTACTS_FAIL = "[CONTACTS] Update CONTACTS Fail",
    UPDATE_CONTACTS_SUCCESS = "[CONTACTS] Update CONTACTS Success",
    DELETE_CONTACTS = "[CONTACTS] Delete CONTACTS",
    DELETE_CONTACTS_FAIL = "[CONTACTS] Delete CONTACTS Fail",
    DELETE_CONTACTS_SUCCESS = "[CONTACTS] Delete CONTACTS Success",
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
    addContact: createAction(
        ContactActionTypes.ADD_CONTACTS,
        props<{contacts:fromOperations.Contact}>()),
    addContactFail:createAction(
        ContactActionTypes.ADD_CONTACTS_FAIL,
        props<{error:any}>()
    ),
    addContactSuccess:createAction(
        ContactActionTypes.ADD_CONTACTS_SUCCESS
    ),
    updateContact: createAction(
        ContactActionTypes.UPDATE_CONTACTS,
        props<{contacts:fromOperations.Contact}>()),
     updateContactFail:createAction(
        ContactActionTypes.UPDATE_CONTACTS_FAIL,
        props<{error:any}>()
    ),
    updateContactSuccess:createAction(
        ContactActionTypes.UPDATE_CONTACTS_SUCCESS
    ),
    deleteContact: createAction(
        ContactActionTypes.DELETE_CONTACTS,
        props<{contacts:fromOperations.Contact}>()),
    deleteContactFail: createAction(
        ContactActionTypes.UPDATE_CONTACTS_FAIL,
        props<{error:any}>()
    ),
    deleteContactSuccess: createAction(
        ContactActionTypes.UPDATE_CONTACTS_SUCCESS
    ),

}

      