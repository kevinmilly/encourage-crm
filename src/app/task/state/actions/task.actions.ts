import { createAction, props } from '@ngrx/store';

export const loadTasks = createAction(
  '[Task] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ data: any }>()
);

export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: any }>()
);
