import { Day } from "./day";

export interface Contact {
    id: string;
    contactName: string;
    email: string;
    phone: string;
    contactType: number; //choices
    priority: number; //choices
    energyLevel: number; //choices
    context: number; //choices
    age: number;
    birthDate: string;
    otherDate: string;
    known: number;
    company: string;
    description: string;
}
