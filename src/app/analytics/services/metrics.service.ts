import { Injectable } from '@angular/core';
import { Contact } from '@operations/contacts';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  constructor() { }


  getHighestRatedFriend(friends:Contact[]): Contact {
    
  }
  getLowestRatedFriend(friends:Contact[]): Contact {
    
  }
  getClosestFamilyMember(family:Contact[]): Contact {
    
  }
  getMostDistantFamilyMember(family:Contact[]): Contact {
    
  }
  getMostImportantContact(contacts:Contact[]): Contact {
    
  }
  getMostToxicContact(contacts:Contact[]): Contact {

  }
  getFriendliestEnvironment(contact:Contact[]): string {

  }
  getTrendingContact(contact:Contact[]): Contact {

  }

  getVolumeAndContactDistribution() {

  }

}
 