import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromOperations from '@operations/index';
import * as fromNoteAction from './note.action';


export interface NoteState extends EntityState<fromOperations.Note> {
    loaded: boolean;
    loading: boolean;
    error:any;
}

export const noteAdapter = createEntityAdapter<fromOperations.Note>();

const initialNoteState = noteAdapter.getInitialState({
    loaded: false,
    loading:false,
    error:null,
})
 
export const noteReducer = createReducer(
    initialNoteState, 
    //load
    on(fromNoteAction.noteActions.loadNotesSuccess, (state,action) => {
        console.log({action});
           return noteAdapter.setAll(action.notes,{
                                            ...state,
                                            loaded:true,
                                            loading:false
                                            });
    }),
    on(fromNoteAction.noteActions.loadNotesFail, (state,action) => {
        return {
            ...state,
            loaded:true, 
            loading:false,
            error: action.error
        }
    }),

    //add
    on(fromNoteAction.noteActions.addNoteSuccess, (state,action) => {
        return noteAdapter.addOne(action.note,state)
    }),
    on(fromNoteAction.noteActions.addNoteFail, (state,action) => {
        return {...state,error:action.error}
    }),
     
)

export const { selectAll } = noteAdapter.getSelectors(); 
 

    