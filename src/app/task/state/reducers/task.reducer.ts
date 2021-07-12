import { Action, createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/task.actions';

export const taskFeatureKey = 'task';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(TaskActions.loadTasks, state => state),
  on(TaskActions.loadTasksSuccess, (state, action) => state),
  on(TaskActions.loadTasksFailure, (state, action) => state),

);

