import { createAction, props } from '@ngrx/store';
import * as fromOperations from '@operations/index';

export enum TaskActionTypes {
  LOAD_TASK = "[TASK LIST COMPONENT] Load TASK",
  LOAD_TASK_FAIL = "[TASK EFFECT] Load TASK Fail",
  LOAD_TASK_SUCCESS = "[TASK EFFECT] Load TASK Success",
  ADD_TASK = "[TASK ADD COMPONENT] Add TASK",
  ADD_TASK_FAIL = "[TASK EFFECT] Add TASK Fail",
  ADD_TASK_SUCCESS = "[TASK EFFECT] Add TASK Success",
  UPDATE_TASK = "[TASK DETAIL COMPONENT] Update TASK",
  UPDATE_TASK_FAIL = "[TASK EFFECT] Update TASK Fail",
  UPDATE_TASK_SUCCESS = "TASK EFFECT] Update TASK Success",
  DELETE_TASK = "[TASK COMPONENT] Delete TASK",
  DELETE_TASK_FAIL = "[TASK EFFECT] Delete TASK Fail",
  DELETE_TASK_SUCCESS = "[TASK EFFECT] Delete TASK Success",
} 

export const taskActions = {
    loadTasks: createAction(TaskActionTypes.LOAD_TASK),
    loadTasksFail: createAction(
        TaskActionTypes.LOAD_TASK_FAIL,
        props<{error:any}>()
    ),
    loadTaskSuccess: createAction(
        TaskActionTypes.LOAD_TASK_SUCCESS,
        props<{tasks:fromOperations.Task[]}>()
    ),
    addTask: createAction(
        TaskActionTypes.ADD_TASK, 
        props<{task:fromOperations.Task}>()
    ),
    addTaskFail:createAction(
        TaskActionTypes.ADD_TASK_FAIL,
        props<{error:any}>()
    ),
    addTaskSuccess:createAction(
        TaskActionTypes.ADD_TASK_SUCCESS, 
        props<{task:fromOperations.Task}>()
    ),
    updateTask: createAction(
        TaskActionTypes.UPDATE_TASK,
        props<{task:fromOperations.Task}>()
    ),
     updateTaskFail:createAction(
        TaskActionTypes.UPDATE_TASK_FAIL,
        props<{error:any}>()
    ),
    updateTaskSuccess:createAction(
        TaskActionTypes.UPDATE_TASK_SUCCESS,
        props<{task:fromOperations.Task}>()
    ),
   deleteTask: createAction(
        TaskActionTypes.DELETE_TASK,
        props<{task:fromOperations.Task}>()
    ),
    deleteTaskFail: createAction(
        TaskActionTypes.DELETE_TASK_FAIL,
        props<{error:any}>()
    ),
    deleteTaskSuccess: createAction(
        TaskActionTypes.DELETE_TASK_SUCCESS,
        props<{task:fromOperations.Task}>()
    )
}


