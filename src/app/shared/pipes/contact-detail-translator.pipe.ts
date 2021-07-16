import { Pipe, PipeTransform } from '@angular/core';
import { ContactType, EnergyLevel, Priorities, Statuses, ContactOptions, Context } from '@operations/contacts';
import { NoteOptions, NoteType } from '@operations/notes';
import { TaskOptions, TaskType } from '@operations/task';

@Pipe({
  name: 'contactDetailTranslator'
})
export class ContactDetailTranslatorPipe implements PipeTransform {

  imageOptions = {
    contactType: [
      'group',
      'family_restroom',
      'family_restroom',
      'family_restroom',
      'family_restroom', 
      'favorite_border',
      'baby_changing_station',
      'family_restroom',
      'family_restroom',
      'family_restroom',
      'elderly',
      'family_restroom',
      'family_restroom',
      'work_outline',
      'person_outline'
    ],
    energyLevel:'bolt',
    priority:'priority_high',
    known: [
      'house',
      'business',
      'attractions',
      'maps_home_work',
      'school',
      'volunteer_activism'
    ],
    taskType:[
      'local_phone',
      'meeting_room',
      'smartphone',
      'mail'
    ],
    noteType:[
      'psychology',
      'local_phone',
      'meeting_room',
      'smartphone',
      'help_center'
    ]
  }
  

  transform(value: number, valueOption: string, pipeType:string): string {
  if(pipeType === 'contact') { 
    switch (valueOption) {

      case ContactOptions[0]:
        return `<b>${ContactType[value]}</b> <span class="material-icons">${this.imageOptions.contactType[value]}</span> `;
      case ContactOptions[1]:
        let energyHTML = `<h5>${EnergyLevel[value]}</h5>`;
        for(let i = 0; i<value; i++) energyHTML += `<span class="material-icons energy-icon">${this.imageOptions.energyLevel}</span>`
        return energyHTML;
      case ContactOptions[2]:
        return `<b>${Statuses[value]}</b>`;
      case ContactOptions[3]:
        let priorityHTML = `<h5>${Priorities[value]}</h5>`;
        for(let i = 0; i<value; i++) priorityHTML += `<span class="material-icons priority-icon">${this.imageOptions.priority}</span>`
        return priorityHTML;
      case ContactOptions[4]:
        return `<b>${Context[value]}</b> <span class="material-icons">${this.imageOptions.known[value]}</span> `;
    }
  } else if(pipeType === 'task') {
    switch (valueOption) {

      case TaskOptions[0]:
        return `<b>${TaskType[value]}</b> <span class="material-icons">${this.imageOptions.taskType[value]}</span> `;
      case TaskOptions[1]:
        return `<b>${Statuses[value]}</b>`;
      case TaskOptions[2]:
        let priorityHTML = `<h5>${Priorities[value]}</h5>`;
        for(let i = 0; i<value; i++) priorityHTML += `<span class="material-icons priority-icon">${this.imageOptions.priority}</span>`
        return priorityHTML;
    }
  } else {
      switch (valueOption) {
        case NoteOptions[0]:
          return `<b>${NoteType[value]}</b> <span class="material-icons">${this.imageOptions.noteType[value]}</span> `;
        case NoteOptions[1]:
          return `<b>${Statuses[value]}</b>`;
        case NoteOptions[2]:
          let priorityHTML = `<h5>${Priorities[value]}</h5>`;
          for(let i = 0; i<value; i++) priorityHTML += `<span class="material-icons priority-icon">${this.imageOptions.priority}</span>`
          return priorityHTML;
      }
  }
    return '';
  } 

}
