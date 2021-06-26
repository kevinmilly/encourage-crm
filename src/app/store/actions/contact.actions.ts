import { Action } from "@ngrx/store";


export const LOAD_CONTACTS = "[CONTACTS] Load CONTACTS";
export const LOAD_CONTACTS_FAIL = "[CONTACTS] Load CONTACTS Fail";
export const LOAD_CONTACTS_SUCCESS = "[CONTACTS] Load CONTACTS Success";

export class LoadContacts implements Action { readonly type: string = LOAD_CONTACTS;}

export class LoadContactsFail implements Action {
    readonly type = LOAD_CONTACTS_FAIL;
    constructor(public payload: any) {}
}

export class LoadContaSuccess
    implements Action {
        readonly type = LOAD_CONTACTS_SUCCESS;
        constructor(public payload: fromCore.Hero[])
{}
}