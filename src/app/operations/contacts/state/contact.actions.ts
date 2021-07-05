import { Action, createAction, props, union } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum ContactActionTypes {
    LOAD_CONTACTS = "[CONTACTS LIST COMPONENT] Load CONTACTS",
    LOAD_CONTACTS_FAIL = "[CONTACTS EFFECT] Load CONTACTS Fail",
    LOAD_CONTACTS_SUCCESS = "[CONTACTS EFFECT] Load CONTACTS Success",
    ADD_CONTACT = "[CONTACTS ADD COMPONENT] Add CONTACTS",
    ADD_CONTACT_FAIL = "[CONTACTS EFFECT] Add CONTACTS Fail",
    ADD_CONTACT_SUCCESS = "[CONTACTS EFFECT] Add CONTACTS Success",
    UPDATE_CONTACT = "[CONTACT DETAIL COMPONENT] Update CONTACTS",
    UPDATE_CONTACT_FAIL = "[CONTACTS EFFECT] Update CONTACTS Fail",
    UPDATE_CONTACT_SUCCESS = "CONTACTS EFFECT] Update CONTACTS Success",
    DELETE_CONTACT = "[CONTACTS COMPONENT] Delete CONTACTS",
    DELETE_CONTACT_FAIL = "[CONTACTS EFFECT] Delete CONTACTS Fail",
    DELETE_CONTACT_SUCCESS = "[CONTACTS EFFECT] Delete CONTACTS Success",
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
        ContactActionTypes.ADD_CONTACT, 
        props<{contact:fromOperations.Contact}>()
    ),
    addContactFail:createAction(
        ContactActionTypes.ADD_CONTACT_FAIL,
        props<{error:any}>()
    ),
    addContactSuccess:createAction(
        ContactActionTypes.ADD_CONTACT_SUCCESS, 
        props<{contact:fromOperations.Contact}>()
    ),
    updateContact: createAction(
        ContactActionTypes.UPDATE_CONTACT,
        props<{contact:fromOperations.Contact}>()
    ),
     updateContactFail:createAction(
        ContactActionTypes.UPDATE_CONTACT_FAIL,
        props<{error:any}>()
    ),
    updateContactSuccess:createAction(
        ContactActionTypes.UPDATE_CONTACT_SUCCESS,
        props<{contact:fromOperations.Contact}>()
    ),
    deleteContactFail: createAction(
        ContactActionTypes.DELETE_CONTACT_FAIL,
        props<{error:any}>()
    ),
    deleteContactSuccess: createAction(
        ContactActionTypes.DELETE_CONTACT_SUCCESS
    ),

}

       