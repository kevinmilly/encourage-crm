import { ActionReducerMap } from "@ngrx/store";
import * as fromOperation from "../../operations/index";



export interface AppState {
    contactState: fromOperation.ContactState
}

export const reducers:ActionReducerMap<AppState> = {
  contactState: fromOperation.contactReducer
}  