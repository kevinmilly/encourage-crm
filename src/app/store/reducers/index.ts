import { ActionReducerMap } from '@ngrx/store';
import * as fromContactReducer from './contact.reducer';
import * as fromNoteReducer from './note.reducer';

export interface OperationState {
    contacts: fromContactReducer.ContactState;
    notes: fromNoteReducer.NoteState;
}

export const operationReducers:ActionReducerMap<OperationState> = {
    contacts: fromContactReducer.contactReducer,
    notes: fromNoteReducer.noteReducer
}