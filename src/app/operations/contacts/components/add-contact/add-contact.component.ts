import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromContactState from "../../state/index";
import { Contact } from "@operations/contacts/index";

import { ContactType, Context, Priorities } from '@operations/contacts';
import { EnergyLevel } from '@operations/contacts/models/enums/energy-level.enum';
import { Statuses } from '@operations/contacts/models/enums/statuses.enum';
import { IControlModel } from '@shared/models/control.model';

@Component({
  selector: 'enccrm-add-contact',
  template: `
  <enccrm-general-card>
    <enccrm-form
      [controlsToCreate]="addConceptControls"
      (onSubmit)="submit($event)"
    >
      <div 
      horizontal
      > 
       Add a new Contact
    </div>
    </enccrm-form>
  </enccrm-general-card>
  `,
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  contactTypeChoices = [
    { name: ContactType[0], value: 0 },
    { name: ContactType[1], value: 1 },
    { name: ContactType[2], value: 2 },
    { name: ContactType[3], value: 3 },
    { name: ContactType[4], value: 4 },
    { name: ContactType[5], value: 5 },
    { name: ContactType[6], value: 6 },
    { name: ContactType[7], value: 7 },
    { name: ContactType[8], value: 8 },
    { name: ContactType[9], value: 9 },
    { name: ContactType[10], value: 10 },
    { name: ContactType[11], value: 11 },
    { name: ContactType[12], value: 12 },
    { name: ContactType[13], value: 13 },
    { name: ContactType[14], value: 14 },
  ]
  contextKnownFrom = [
    { name: Context[0], value: 0 },
    { name: Context[1], value: 1 },
    { name: Context[2], value: 2 },
    { name: Context[3], value: 3 },
    { name: Context[4], value: 4 },
    { name: Context[5], value: 5 },
  ]
  energyLevels = [
    { name: EnergyLevel[0], value: 0 },
    { name: EnergyLevel[1], value: 1 },
    { name: EnergyLevel[2], value: 2 },
    { name: EnergyLevel[3], value: 3 },
    { name: EnergyLevel[4], value: 4 },
    { name: EnergyLevel[5], value: 5 },
  ]
  priorities = [
    { name: Priorities[0], value: 0 },
    { name: Priorities[1], value: 1 },
    { name: Priorities[2], value: 2 },
    { name: Priorities[3], value: 3 },
    { name: Priorities[4], value: 4 },
  ]
  statuses = [
    { name: Statuses[0], value: 0 },
    { name: Statuses[1], value: 1 },
  ]

  addConceptControls: IControlModel[] = [
    {
      displayName: "Name",
      controlName: "contactName",
      type: "string",
      required: true,
      default: '',
    },
    {
      displayName: "Contact Type",
      controlName: "contactType",
      type: "stringChoice",
      required: true,
      default: 14,
      stringChoices: this.contactTypeChoices
    },
    {
      displayName: "Know From?",
      controlName: "known",
      type: "stringChoice",
      required: true,
      default: 1,
      stringChoices: this.contextKnownFrom
    },
    {
      displayName: "How Important?",
      controlName: "priority",
      type: "stringChoiceSet",
      required: true,
      default: 1,
      stringChoices: this.priorities
    },
    {
      displayName: "Energy Level",
      controlName: "energyLevel",
      type: "stringChoiceSet",
      required: true,
      default: 1,
      stringChoices: this.energyLevels
    },
    {
      displayName: "Birth Date",
      controlName: "birthDate",
      type: "date",
      required: false,
      default: '',
    },
    {
      displayName: "Other Date",
      controlName: "otherDate",
      type: "date",
      required: false,
      default: '',
    },
    {
      displayName: "Email",
      controlName: "email",
      type: "email",
      required: false,
      default: '',
    },
    {
      displayName: "Phone",
      controlName: "phone",
      type: "string",
      required: true,
      default: '',
    },
    {
      displayName: "Initial Notes",
      controlName: "description",
      type: "longString",
      required: false, 
      default: '',
    }
  ];

  constructor(private store: Store) { };

  ngOnInit(): void {
   
  }

  submit(contact:Contact) {
    this.store.dispatch(fromContactState.contactActions.addContact({contact}));
  }

}
