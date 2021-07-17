import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Contact } from "@operations/contacts";
import { selectContacts } from "@operations/contacts/state";
import { TaskType, Priorities, Statuses, Task } from "@operations/task";
import { taskActions } from "@operations/task/state";
import { IControlModel } from "@shared/models/control.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
    template: `
    <enccrm-general-card>
    <enccrm-form
      [controlsToCreate]="addConceptControls"
      (onSubmit)="submit($event)"
    >
      <div 
      horizontal
      > 
       Add a new Task 
    </div>
    </enccrm-form>
  </enccrm-general-card>
    `,
    styleUrls:[]
})
export class AddTaskComponent { 
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
    
      addConceptControls: IControlModel[] = [];

      contacts$:Observable<Contact[]> | undefined;
    
      constructor(private store: Store) { };
    
      ngOnInit(): void {
        this.contacts$ = this.store.select(selectContacts);
        this.addConceptControls = [
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
              default: 'No Description Yet',
            },
            {
                displayName: "Related Contact",
                controlName: "contact",
                type: "autocomplete-select",
                required: true, 
                default: '', 
                autoCompleteOptions:this.contacts$.pipe(map(contacts => contacts.map(contact => ({value:contact.id, display:contact.contactName}))))
            }
          ];

      }
    
      submit(task:Task) {
        this.store.dispatch(taskActions.addTask({task}));
      }
}