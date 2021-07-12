import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll } from '@operations/task/state';
import * as fromTask from '../reducers/task.reducer';

export const selectTaskState = createFeatureSelector<fromTask.TaskState>(
  fromTask.taskFeatureKey
);

export const selectTasks = createSelector(
  selectTaskState, 
  selectAll
);  
