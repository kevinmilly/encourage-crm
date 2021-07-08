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
    priorities:'priority_high',
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
    const valuesSpread = [value].map((v,i) => i);
    switch (valueDisplayType) {

      case ContactOptions[0]:
        return `<b>${ContactType[value]}</b> <mat-icon>${this.imageOptions.contactType[value]}</mat-icon> `;
      case ContactOptions[1]:
        return `<b>${EnergyLevel[value]}</b> <mat-icon *ngFor="let icon of ${valuesSpread}>${this.imageOptions.energyLevel}</mat-icon>`;
      case ContactOptions[2]:
        return `<b>${Statuses[value]}</b>`;
      case ContactOptions[3]:
        return `<b>${Priorities[value]}</b> <mat-icon *ngFor="let icon of ${valuesSpread}>${this.imageOptions.priorities}</mat-icon>`;
      case ContactOptions[4]:
        return `<b>${Context[value]}</b> <mat-icon>${this.imageOptions.context[value]}</mat-icon> `;
    }
    return '';
  }

}
