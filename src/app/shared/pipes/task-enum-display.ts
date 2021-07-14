import { Pipe, PipeTransform } from '@angular/core';
import { TaskOptions, TaskType, Priorities, Statuses } from '@operations/task';


@Pipe({
  name: 'task_display_translator' 
})
export class TaskEnumDisplayPipe implements PipeTransform {

  transform(value: number, valueDisplayType:string): string {
        switch (valueDisplayType) {

          case TaskOptions[0]:
            return `${TaskType[value]}`;
          case TaskOptions[1]:
            return `<b> Status: </b>${Statuses[value]}`;
          case TaskOptions[2]:
            return `<b> Priority: </b>${Priorities[value]}`;
        }
      
    return '';

  }

}
