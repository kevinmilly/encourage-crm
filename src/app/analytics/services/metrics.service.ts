import { Injectable } from '@angular/core';
import { Contact, Context, ContactType } from '@operations/contact';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  constructor() { }


  getLowestofSortedContacts(contacts: Contact[]): Contact {
    return contacts.sort((a, b) => (a.energyLevel + a.priority) - (b.energyLevel + b.priority))[contacts.length - 1];
  }


  getHighestofSortedContacts(contacts: Contact[]): Contact {
    return contacts.sort((a, b) => (a.energyLevel + a.priority) - (b.energyLevel + b.priority))[0];
  }

  getMostFrequentEnvironment(friends: Contact[]): string {
    const environments = [
      { context: 0, value: 0 },
      { context: 1, value: 0 },
      { context: 2, value: 0 },
      { context: 3, value: 0 },
      { context: 4, value: 0 },
      { context: 5, value: 0 }
    ];
    friends.forEach(friend => environments[friend.contactType].value++);
    const sortedEnvironments = environments.sort((a, b) => a.value - b.value)
    return Context[sortedEnvironments[0].value];
  }

  getContactDistribution(contacts: Contact[]): { cType: number, value: number }[] {
    const distribution = [
      { cType: 0, value: 0 },
      { cType: 1, value: 0 },
      { cType: 2, value: 0 },
      { cType: 3, value: 0 },
      { cType: 4, value: 0 },
      { cType: 5, value: 0 },
      { cType: 6, value: 0 },
      { cType: 7, value: 0 },
      { cType: 8, value: 0 },
      { cType: 9, value: 0 },
      { cType: 10, value: 0 },
      { cType: 11, value: 0 },
      { cType: 12, value: 0 },
      { cType: 13, value: 0 },
      { cType: 14, value: 0 }
    ];

    contacts.forEach(contact => {

      distribution[contact.contactType].value++
    })
    return distribution;

  }


}
