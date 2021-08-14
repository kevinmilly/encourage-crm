import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Task, TaskOptions, TaskType } from '@operations/task';
import * as fromOperations from '@operations/index';
import { Observable, of, Subscription } from 'rxjs';
import { SubSink } from 'subsink';
import * as fromTaskState from '../../state/index';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { selectTasks } from '@operations/task/state/selectors/task.selectors';

@Component({
  selector: 'enccrm-tasks',
  template:
    ` 
  <header>
    <h1>Task List</h1>
  </header>
  <main>
      <div class="container">
        <enccrm-general-card> 
        <mat-form-field appearance="fill">
          <mat-label>Task Types</mat-label>
          <mat-select [formControl]="taskTypeFilter" multiple>
            <mat-option *ngFor="let type of taskTypes" [value]="type">{{type}}</mat-option>
          </mat-select>
        </mat-form-field>
          <enccrm-table
            *ngIf="data.length > 0; else noData"
            [data]="data"
            [columns]="columns"
            [displayNames]="displayNames"
            [pipesNeeded]="pipeOptions"
            [pipeType]="'task'"
            [linksNeeded]="['taskName']" 
            (onZoom)="detailTask($event)"
          ></enccrm-table>
          <ng-template #noData><h1>No Data Yet</h1></ng-template>
        </enccrm-general-card>
        </div>
    </main>
  `,
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  private subs = new SubSink();

  dataSub: Subscription = new Subscription;
  data: any[] = [];
  dataSaved: any[] = [];


  columns: string[] = [
    'taskName',
    'taskType', //choices
    'priority', //choices 
    'contact',
    'description'
  ];
  displayNames: string[] = [
    'Name',
    'Task Type', //choices
    'Priority', //choices
    'Contact',
    'Description'
  ];

  taskTypes: string[] = [
    TaskType[0],
    TaskType[1],
    TaskType[2],
    TaskType[3]
  ]

  pipeOptions: string[] = [];
  taskTypeFilter: FormControl = new FormControl;

  tasks$: Observable<fromOperations.Task[]> | undefined;

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.taskTypeFilter = new FormControl(this.taskTypes);
    this.pipeOptions = [
      TaskOptions[0],
      TaskOptions[1],
      TaskOptions[2]
    ]

    this.tasks$ = this.store.select(selectTasks);


    this.subs.sink = this.tasks$.subscribe(data => {

      this.data = data;
      this.dataSaved = [...data];
    });
    this.subs.sink = this.taskTypeFilter.valueChanges.subscribe(() => this.taskFilter());

  }

  taskFilter() {
    this.data = this.dataSaved.filter(d => this.taskTypeFilter.value.includes(TaskType[+d.taskType]));
  }

  detailTask(event: fromOperations.Task) {

    const dialogRef = this.dialog.open(TaskDetailComponent, {
      width: '90vw',
      height: '45rem',
      data: {
        task: event

      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.action === 'delete') {
        this.store.dispatch(fromTaskState.taskActions.deleteTask(result.task));
      } else { //add

      }

    });
  }

  deleteTaskInDB(event: fromOperations.Task) {
    console.log("Need to implement");
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
