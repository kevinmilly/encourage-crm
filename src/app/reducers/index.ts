import { ActionReducerMap } from "@ngrx/store";
import { operationReducers, OperationState } from "@operations/store";
import * as fromOperationReducers from "../operations/store/reducers/index";


export interface AppState {
    opstate:fromOperationReducers.OperationState
}

export const reducers:ActionReducerMap<AppState> = {
  contactState: fromOperationReducers.operationReducers.contacts,
  noteState: fromOperationReducers.operationReducers.notes
}