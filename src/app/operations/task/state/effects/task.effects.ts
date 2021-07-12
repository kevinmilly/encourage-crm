import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as fromTaskAction from '../actions/task.actions';
import { BackendService } from '@core/services/backend.service';
import { Task } from '@operations/task';



@Injectable() 
export class TaskEffects {

loadTasks$ = createEffect(() => 

  this.actions$.pipe( 
    ofType(fromTaskAction.taskActions.loadTasks),
    concatMap(() => {
      return this.backend.getTasks().pipe(
        map((tasks:Task[]) => fromTaskAction.taskActions.loadTaskSuccess({tasks}))
      )
    }), 
    catchError(error => of(fromTaskAction.taskActions.loadTasksFail({error})))
)
); 

addTasks$ = createEffect(() => 
this.actions$.pipe( 
 ofType(fromTaskAction.taskActions.addTask),
 concatMap(action => {

     return this.backend.addTask(action.task).pipe(
       map((task:Task) => fromTaskAction.taskActions.addTaskSuccess({task}))
   )
 }),
 catchError(() => EMPTY)
)
);

updateTasks$ = createEffect(() => 
  this.actions$.pipe( 
  ofType(fromTaskAction.taskActions.updateTask),
  concatMap((action) => {
    return this.backend.updateTask(action.task).pipe(
      map((task:Task) => fromTaskAction.taskActions.updateTaskSuccess({task}))
    )
  }),
  catchError(error => of(fromTaskAction.taskActions.updateTaskFail({error})))
  )
);

deleteTasks$ = createEffect(() => 
  this.actions$.pipe( 
  ofType(fromTaskAction.taskActions.deleteTask),
  concatMap((action) => {
    return this.backend.deleteTask(action.task).pipe(
      map((task:Task) => fromTaskAction.taskActions.deleteTaskSuccess({task}))
    )
  }),
  catchError(error => of(fromTaskAction.taskActions.deleteTaskFail({error})))
  )
);


constructor(private actions$: Actions, private backend:BackendService) {}

}
