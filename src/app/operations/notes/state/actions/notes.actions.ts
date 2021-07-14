import { createAction, props } from '@ngrx/store';

import * as fromOperations from '@operations/index';

export enum NoteActionTypes {
  LOAD_NOTES = "[NOTES LIST COMPONENT] Load NOTES",
  LOAD_NOTES_FAIL = "[NOTES EFFECT] Load NOTES Fail",
  LOAD_NOTES_SUCCESS = "[NOTES EFFECT] Load NOTES Success",
  ADD_NOTE = "[NOTES ADD COMPONENT] Add NOTES",
  ADD_NOTE_FAIL = "[NOTES EFFECT] Add NOTES Fail",
  ADD_NOTE_SUCCESS = "[NOTES EFFECT] Add NOTES Success",
  UPDATE_NOTE = "[NOTE DETAIL COMPONENT] Update NOTES",
  UPDATE_NOTE_FAIL = "[NOTES EFFECT] Update NOTES Fail",
  UPDATE_NOTE_SUCCESS = "NOTES EFFECT] Update NOTES Success",
  DELETE_NOTE = "[NOTES COMPONENT] Delete NOTES",
  DELETE_NOTE_FAIL = "[NOTES EFFECT] Delete NOTES Fail",
  DELETE_NOTE_SUCCESS = "[NOTES EFFECT] Delete NOTES Success",
} 


export const noteActions = {
  loadNotes: createAction(NoteActionTypes.LOAD_NOTES),
  loadNotesFail: createAction(
      NoteActionTypes.LOAD_NOTES_FAIL,
      props<{error:any}>()
  ),
  loadNoteSuccess: createAction(
      NoteActionTypes.LOAD_NOTES_SUCCESS,
      props<{notes:fromOperations.Note[]}>()
  ),
  addNote: createAction(
      NoteActionTypes.ADD_NOTE, 
      props<{note:fromOperations.Note}>()
  ),
  addNoteFail:createAction(
      NoteActionTypes.ADD_NOTE_FAIL,
      props<{error:any}>()
  ),
  addNoteSuccess:createAction(
      NoteActionTypes.ADD_NOTE_SUCCESS, 
      props<{note:fromOperations.Note}>()
  ),
  updateNote: createAction(
      NoteActionTypes.UPDATE_NOTE,
      props<{note:fromOperations.Note}>()
  ),
   updateNoteFail:createAction(
      NoteActionTypes.UPDATE_NOTE_FAIL,
      props<{error:any}>()
  ),
  updateNoteSuccess:createAction(
      NoteActionTypes.UPDATE_NOTE_SUCCESS,
      props<{note:fromOperations.Note}>()
  ),
 deleteNote: createAction(
      NoteActionTypes.DELETE_NOTE,
      props<{note:fromOperations.Note}>()
  ),
  deleteNoteFail: createAction(
      NoteActionTypes.DELETE_NOTE_FAIL,
      props<{error:any}>()
  ),
  deleteNoteSuccess: createAction(
      NoteActionTypes.DELETE_NOTE_SUCCESS,
      props<{note:fromOperations.Note}>()
  )
}
