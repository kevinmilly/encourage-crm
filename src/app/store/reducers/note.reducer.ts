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
 
// export function noteReducer(
//         state=initialState, 
//         action:fromNoteAction.NoteActionsUnion
//     ): NoteState {
                    
//         switch (action.type) {
//             case fromNoteAction.NotesActionTypes.LOAD_NOTES:
//                 return ({
//                         ...state, 
//                         loading: true 
//                         });
//             case fromNoteAction.NotesActionTypes.LOAD_NOTES_SUCCESS:
//                 return ({
//                         ...state, 
//                         loading: false,
//                         loaded:true,

//                         });
//             case fromNoteAction.NotesActionTypes.LOAD_NOTES_FAIL:
//                 return ({
//                         ...state, 
//                         loading: false,
//                         loaded:false,

//                         });
//             default:
//                 return state;
//         }
//     }

    