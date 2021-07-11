import { Action, createAction, props } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum NotesActionTypes {
    LOAD_NOTES = "[NOTES] Load NOTES",
    LOAD_NOTES_FAIL = "[NOTES] Load NOTES Fail",
    LOAD_NOTES_SUCCESS = "[NOTES] Load NOTES Success",

    ADD_NOTE = "[NOTES COMPONENT] Add NOTES",
    ADD_NOTE_FAIL = "[NOTES EFFECT] Add NOTES Fail",
    ADD_NOTE_SUCCESS = "[NOTES EFFECT] Add NOTES Success",

    UPDATE_NOTE = "[NOTES COMPONENT] Update NOTES",
    UPDATE_NOTE_FAIL = "[NOTES EFFECT] Update NOTES Fail",
    UPDATE_NOTE_SUCCESS = "NOTES EFFECT] Update NOTES Success",

    DELETE_NOTE = "[NOTES COMPONENT] Delete NOTES",
    DELETE_NOTE_FAIL = "[NOTES EFFECT] Delete NOTES Fail",
    DELETE_NOTE_SUCCESS = "[NOTES EFFECT] Delete NOTES Success",
}




export const noteActions = {
    loadNotes: createAction(
        NotesActionTypes.LOAD_NOTES
        // props<{ contactId: string }>()
    ),
    loadNotesFail: createAction(
        NotesActionTypes.LOAD_NOTES_FAIL,
        props<{ error: any }>()
    ),
    loadNotesSuccess: createAction(
        NotesActionTypes.LOAD_NOTES_SUCCESS,
        props<{ notes: fromOperations.Note[] }>()
    ),
    addNote: createAction(
        NotesActionTypes.ADD_NOTE,
        props<{ note: fromOperations.Note }>()
    ),
    addNoteFail: createAction(
        NotesActionTypes.ADD_NOTE_FAIL,
        props<{ error: any }>()
    ),
    addNoteSuccess: createAction(
        NotesActionTypes.ADD_NOTE_SUCCESS,
        props<{ note: fromOperations.Note }>()
    ),
    updateNote: createAction(
        NotesActionTypes.UPDATE_NOTE,
        props<{ note: fromOperations.Note }>()
    ),
    updateNoteFail: createAction(
        NotesActionTypes.UPDATE_NOTE_FAIL,
        props<{ error: any }>()
    ),
    updateNoteSuccess: createAction(
        NotesActionTypes.UPDATE_NOTE_SUCCESS,
        props<{ note: fromOperations.Note }>()
    ),
    deleteNote: createAction(
        NotesActionTypes.DELETE_NOTE,
        props<{ note: fromOperations.Note }>()
    ),
    deleteNoteFail: createAction(
        NotesActionTypes.DELETE_NOTE_FAIL,
        props<{ error: any }>()
    ),
    deleteNoteSuccess: createAction(
        NotesActionTypes.DELETE_NOTE_SUCCESS,
        props<{ note: fromOperations.Note }>()
    ),

}