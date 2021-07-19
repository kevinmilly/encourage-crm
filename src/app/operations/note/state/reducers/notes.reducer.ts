import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromOperations from '@operations/index';
import * as fromNoteAction from '../actions/notes.actions';

export const noteFeatureKey = 'note';

export interface NoteState extends EntityState<fromOperations.Note> {
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const noteAdapter = createEntityAdapter<fromOperations.Note>();

const initialNoteState = noteAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: null,
})




export const noteReducer = createReducer(
    initialNoteState,
    //load
    on(fromNoteAction.noteActions.loadNoteSuccess, (state, action) => {
        return noteAdapter.setAll(action.notes, {
            ...state,
            loaded: true,
            loading: false
        });
    }),
    on(fromNoteAction.noteActions.loadNotesFail, (state, action) => {
        return {
            ...state,
            loaded: true,
            loading: false,
            error: action.error
        }
    }),

    //add
    on(fromNoteAction.noteActions.addNoteSuccess, (state, action) => {
        return noteAdapter.addOne(action.note, state)
    }),
    on(fromNoteAction.noteActions.addNoteFail, (state, action) => {
        return { ...state, error: action.error }
    }),

    //update
    // on(fromNoteAction.noteActions.updateNoteSuccess, (state,action) => {
    //     return noteAdapter.updateOne(action.note,state)
    // }),
    // on(fromNoteAction.noteActions.updateNoteFail, (state,action) => {
    //     return {...state,error:action.error}
    // }),

    //delete
    // on(fromNoteAction.noteActions.deleteNoteSuccess, (state,action) => {
    //     return noteAdapter.removeOne(action.note,state)
    // }),
    // on(fromNoteAction.noteActions.deleteNoteFail, (state,action) => {
    //     return {...state,error:action.error}
    // })
)

export const { selectAll } = noteAdapter.getSelectors();