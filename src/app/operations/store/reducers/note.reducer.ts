import { createReducer, on } from '@ngrx/store';
import * as fromOperations from '@operations/index';
import * as fromNoteAction from '../actions';

export interface NoteState {
    notes: fromOperations.Note[];
    loaded: boolean;
    loading: boolean;
}

const initialState:NoteState = { 
    notes:[],
    loaded: false,
    loading:false
}

export const noteReducer = createReducer(
    initialState, 
    on(fromNoteAction.loadNotes, (state,action) => {
        return {
            ...state, 
            loading: true 
            }
    }),
    on(fromNoteAction.loadNotesSuccess, (state,action) => {
            return {
                ...state,
                loaded:true,
                loading:false
            }
    }), 
    on(fromNoteAction.loadNotesFail, (state,action) => {
        return {
            ...state,
            loaded:true,
            loading:false
        }
    })
    
)
 

    