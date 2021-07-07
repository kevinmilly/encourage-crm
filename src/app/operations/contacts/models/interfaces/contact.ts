import { Day } from "./day";

export interface Contact { 
    id:string;
    contactName: string;
    email: string;
    phone: string;
    contactType: string; //choices
    priority: string; //choices
    energyLevel: string; //choices
    notes: string[];
    context: string; //choices
    age: number;
    birthdate:string;
    otherDate:string;
    known: number;
    company: string;
    description:string;
}
