import { ActionReducerMap } from "@ngrx/store";
import { noteReducer, NoteState } from "@operations/notes/state/note.reducer";
import * as fromOperation from "../../operations/index";



export interface AppState {
    contactState: fromOperation.ContactState,
    noteState: NoteState
}

export const reducers:ActionReducerMap<AppState> = {
  contactState: fromOperation.contactReducer,
  noteState: noteReducer
}