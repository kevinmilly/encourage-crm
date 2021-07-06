import { Pipe, PipeTransform } from '@angular/core';
import { ContactType, EnergyLevel, Priorities, Statuses, ContactOptions, Context } from '@operations/contacts';


@Pipe({
  name: 'display_translator'
})
export class EnumUserDisplayTranslatorPipe implements PipeTransform {

  transform(value: number, valueDisplayType:string): string {
    console.log({valueDisplayType});
    switch (valueDisplayType) {

      case ContactOptions[0]:
        return ContactType[value];
      case ContactOptions[1]:
        return EnergyLevel[value];
      case ContactOptions[3]:
        return Statuses[value];
      case ContactOptions[2]:
        return Priorities[value];
      case ContactOptions[4]:
        return Context[value];
    }
    return '';
  }

}
