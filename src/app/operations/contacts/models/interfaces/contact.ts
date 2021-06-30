import { Day } from "./day";

export interface Contact {
    id:string;
    name: string;
    email: string;
    phone: string;
    contact_type: string;
    priority: string;
    notes: string[];
    context: string;
    age: number;
    special_days: Day[];
    known: number;
    company: string;
    description:string;
}
