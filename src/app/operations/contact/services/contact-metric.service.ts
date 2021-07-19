import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactMetricService {

  constructor() { }

  getContactRating(factors:number[], potentialRating:number) {
    return (factors.reduce((a,b) => a+b, 0) / potentialRating)*100;
  }
  
}
