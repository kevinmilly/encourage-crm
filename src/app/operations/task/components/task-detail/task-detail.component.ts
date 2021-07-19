import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Priorities, Statuses, Contact } from '@operations/contact';
import { TaskType } from '@operations/task';
import { Task } from '@operations/task/models/interfaces/task';
import { FormSetupModel } from '@shared/models/form-setup.model';

@Component({
  selector: 'enccrm-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  editOpen = false;
  task!: Task;

  taskTypeChoices = [
    { name: TaskType[0], value: 0 },
    { name: TaskType[1], value: 1 },
    { name: TaskType[2], value: 2 },
    { name: TaskType[3], value: 3 },
    { name: TaskType[4], value: 4 }
  ]
  priorities = [
    { name: Priorities[0], value: 0 },
    { name: Priorities[1], value: 1 },
    { name: Priorities[2], value: 2 },
    { name: Priorities[3], value: 3 },
    { name: Priorities[4], value: 4 },
  ]
  statuses = [
    { name: Statuses[0], value: 0 },
    { name: Statuses[1], value: 1 },
  ]

  editConceptControls: FormSetupModel[] = [
    {
      displayName: "Name",
      controlName: "taskName",
      type: "string",
      required: true,
      default: '',
    },
    {
      displayName: "Task Type",
      controlName: "taskType",
      type: "stringChoice",
      required: true,
      default: 14,
      stringChoices: this.taskTypeChoices
    },
    {
      displayName: "How Important?",
      controlName: "priority",
      type: "stringChoiceSet",
      required: true,
      default: 1,
      stringChoices: this.priorities
    },
    {
      displayName: "Description",
      controlName: "description",
      type: "longString",
      required: false,
      default: '',
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { task: Task },
    private dialogRef: MatDialogRef<TaskDetailComponent>
  ) { }

  ngOnInit(): void {
    this.task = this.data.task;


  }

  submit(event: any) {


  }

}
