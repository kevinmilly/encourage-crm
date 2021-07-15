import { Pipe, PipeTransform } from '@angular/core';
import { ContactType, EnergyLevel, Priorities, Statuses, ContactOptions, Context } from '@operations/contacts';
import { NoteOptions, NoteType } from '@operations/notes';
import { TaskOptions, TaskType } from '@operations/task';


@Pipe({
  name: 'display_translator' 
})
export class EnumUserDisplayTranslatorPipe implements PipeTransform {

  transform(value: number, valueDisplayType:string,pipeType:string): string {
    if('contact') { 
      switch (valueDisplayType) {

        case ContactOptions[0]:
          return `${ContactType[value]}`;
        case ContactOptions[1]:
          return `<b> Energy Level: </b>${EnergyLevel[value]}` ;
        case ContactOptions[2]:
          return `${Statuses[value]}`;
        case ContactOptions[3]:
          return `<b> Priority: </b>${Priorities[value]}`;
        case ContactOptions[4]:
          return `<b> Know From: </b>${Context[value]}`;
      }
    
    } else if('task') {
        switch (valueDisplayType) {

          case TaskOptions[0]:
            return `${TaskType[value]}`;
          case TaskOptions[1]:
            return `<b> Status: </b>${Statuses[value]}`;
          case TaskOptions[2]:
            return `<b> Priority: </b>${Priorities[value]}`;
        }
      
    } else {
        switch (valueDisplayType) {

          case NoteOptions[0]:
            return `${NoteType[value]}`;
          case NoteOptions[1]:
            return `<b> Status: </b>${Statuses[value]}`;
          case NoteOptions[2]:
            return `<b> Priority: </b>${Priorities[value]}`;
        }
    }
    return '';

  }

}
