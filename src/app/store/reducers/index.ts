import { ActionReducerMap } from "@ngrx/store";
import * as fromOperation from "../../operations/index";


export interface AppState {
    contactState: fromOperation.ContactState,
    noteState: fromOperation.NoteState
}

export const reducers:ActionReducerMap<AppState> = {
  contactState: fromOperation.contactReducer,
  noteState: fromOperation.noteReducer
}