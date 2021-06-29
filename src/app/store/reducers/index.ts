import { ActionReducerMap } from "@ngrx/store";
import * as fromContact from "../../operations/index";


export interface AppState {
    contactState: fromContact.ContactState,
    noteState: fromContact.NoteState
}

export const reducers:ActionReducerMap<AppState> = {
  contactState: fromContact.contactReducer,
  noteState: fromContact.noteReducer
}