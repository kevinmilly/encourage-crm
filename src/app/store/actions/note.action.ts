import { Action } from "@ngrx/store";

import * as fromOperations from '@operations/index';

export enum NotesActionTypes {
    LOAD_NOTES = "[NOTES] Load NOTES",
    LOAD_NOTES_FAIL = "[NOTES] Load NOTES Fail",
    LOAD_NOTES_SUCCESS = "[NOTES] Load NOTES Success"
}


export class LoadNotes implements Action { 
    constructor(public payload: any = null) { }
    readonly type: string = NotesActionTypes.LOAD_NOTES;
}

export class LoadNotesFail implements Action {
    constructor(public payload: any = null) { }
    readonly type = NotesActionTypes.LOAD_NOTES_FAIL;
  
}

export class LoadNotesSuccess implements Action {
        constructor(public payload: fromOperations.Note[]) {} 
        readonly type = NotesActionTypes.LOAD_NOTES_SUCCESS;
}






export type NoteActionsUnion =  LoadNotes | LoadNotesSuccess | LoadNotesFail;
                              
 