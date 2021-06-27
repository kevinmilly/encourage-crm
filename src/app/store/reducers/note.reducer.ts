import * as fromOperations from '@operations/index';
import * as fromNoteAction from '../actions';

export interface NoteState {
    notes: fromOperations.Note[];
    loaded: boolean;
    loading: boolean;
}

const initialState = {
    notes:[],
    loaded: false,
    loading:false
}

export function noteReducer(
        state=initialState, 
        action:fromNoteAction.NoteActionsUnion
    ): NoteState {
                    
        switch (action.type) {
            case fromNoteAction.NotesActionTypes.LOAD_NOTES_SUCCESS:
                return ({
                        ...initialState, 
                        ...action.payload
                        });
            default:
                return state;
        }
    }

    