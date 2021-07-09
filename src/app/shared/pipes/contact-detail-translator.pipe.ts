import { Pipe, PipeTransform } from '@angular/core';
import { ContactType, EnergyLevel, Priorities, Statuses, ContactOptions, Context } from '@operations/contacts';

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
    context: [
      'house',
      'business',
      'attractions',
      'maps_home_work',
      'school',
      'volunteer_activism'
    ]
  }
  

  transform(value: number, valueDisplayType: string): string {
    console.log(arguments);
    
    switch (valueDisplayType) {

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
        return `<b>${Context[value]}</b> <span class="material-icons">${this.imageOptions.context[value]}</span> `;
    }
    return '';
  }

}
