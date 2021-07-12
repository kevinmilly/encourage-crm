import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import * as TaskActions from '../actions/task.actions';
import * as fromOperations from '@operations/index';
import * as fromTaskAction from '../actions/task.actions';

export const taskFeatureKey = 'task';

export interface TaskState extends EntityState<fromOperations.Task> {
  loaded: boolean;
  loading: boolean;
  error:any;
}

export const taskAdapter = createEntityAdapter<fromOperations.Task>();

const initialTaskState = taskAdapter.getInitialState({
  loaded: false,
  loading:false, 
  error:null, 
})


export const reducer = createReducer(
  initialTaskState,

  on(TaskActions.taskActions.loadTasks, state => state),
  on(TaskActions.taskActions.loadTasksSuccess, (state, action) => state),
  on(TaskActions.taskActions.loadTasksFailure, (state, action) => state),

);

export const { selectAll } = taskAdapter.getSelectors();  