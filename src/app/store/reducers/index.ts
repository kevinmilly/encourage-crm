import { ActionReducerMap } from "@ngrx/store";
import { noteReducer, NoteState } from "@operations/notes/state";
import { taskReducer, TaskState } from "@operations/task/state";
import * as fromOperation from "../../operations/index";



export interface AppState {
    contactState: fromOperation.ContactState
    taskState: TaskState,
    noteState: NoteState
}

export const reducers:ActionReducerMap<AppState> = {
  contactState: fromOperation.contactReducer,
  taskState: taskReducer,
  noteState: noteReducer
  
}  