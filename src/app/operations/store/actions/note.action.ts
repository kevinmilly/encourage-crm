import { Action, createAction, props } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum NotesActionTypes {
    LOAD_NOTES = "[NOTES] Load NOTES",
    LOAD_NOTES_FAIL = "[NOTES] Load NOTES Fail",
    LOAD_NOTES_SUCCESS = "[NOTES] Load NOTES Success"
}


export const loadNotes = createAction(
    NotesActionTypes.LOAD_NOTES
)

export const loadNotesFail = createAction(
    NotesActionTypes.LOAD_NOTES_FAIL,
    props<{error:any}>()
)
    
export const loadNotesSuccess = createAction(
    NotesActionTypes.LOAD_NOTES_SUCCESS,
    props<{Contacts:fromOperations.Contact[]}>()
) 
    
                              
 