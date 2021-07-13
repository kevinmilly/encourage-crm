import { ActionReducerMap } from "@ngrx/store";
import { taskReducer, TaskState } from "@operations/task/state";
import * as fromOperation from "../../operations/index";



export interface AppState {
    contactState: fromOperation.ContactState
    taskState: TaskState
}

export const reducers:ActionReducerMap<AppState> = {
  contactState: fromOperation.contactReducer,
  taskState: taskReducer  
  
}  