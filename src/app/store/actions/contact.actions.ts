import { Action } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum ContactActionTypes {
    LOAD_CONTACTS = "[CONTACTS] Load CONTACTS",
    LOAD_CONTACTS_FAIL = "[CONTACTS] Load CONTACTS Fail",
    LOAD_CONTACTS_SUCCESS = "[CONTACTS] Load CONTACTS Success"
}


export class LoadContacts implements Action { 
    constructor(public payload: any = null) { }
    readonly type: string = ContactActionTypes.LOAD_CONTACTS;
}

export class LoadContactsFail implements Action {
    constructor(public payload: any = null) { }
    readonly type = ContactActionTypes.LOAD_CONTACTS_FAIL;
  
}

export class LoadContactSuccess implements Action {
        constructor(public payload: fromOperations.Contact[]) {} 
        readonly type = ContactActionTypes.LOAD_CONTACTS_SUCCESS;
}






export type ContactActionsUnion =  LoadContacts | LoadContactSuccess | LoadContactsFail;
                              
 