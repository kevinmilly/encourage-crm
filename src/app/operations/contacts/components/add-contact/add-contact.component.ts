import { Component, OnInit } from '@angular/core';
import { ContactType, Context, Priorities } from '@operations/contacts';
import { EnergyLevel } from '@operations/contacts/models/enums/energy-level.enum';
import { Statuses } from '@operations/contacts/models/enums/statuses.enum';
import { IControlModel } from '@shared/models/control.model';

@Component({
  selector: 'enccrm-add-contact',
  template: `
  
  `,
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  
  contactTypeChoices = [
    {name: ContactType[0], value:0 },
    {name: ContactType[1], value:1 },
    {name: ContactType[2], value:2 },
    {name: ContactType[3], value:3 },
    {name: ContactType[4], value:4 },
    {name: ContactType[5], value:5 },
    {name: ContactType[6], value:6 },
    {name: ContactType[7], value:7 },
    {name: ContactType[8], value:8 },
    {name: ContactType[9], value:9 },
    {name: ContactType[10], value:10 },
    {name: ContactType[11], value:11 },
    {name: ContactType[12], value:12 },
    {name: ContactType[13], value:13 },
    {name: ContactType[14], value:14 },
  ]
  contextKnownFrom = [
    {name: Context[0], value:0 },
    {name: Context[1], value:1 },
    {name: Context[2], value:2 },
    {name: Context[3], value:3 },
    {name: Context[4], value:4 },
    {name: Context[5], value:5 },
  ]
  energyLevels = [
    {name: EnergyLevel[0], value:0 },
    {name: EnergyLevel[1], value:1 },
    {name: EnergyLevel[2], value:2 },
    {name: EnergyLevel[3], value:3 },
    {name: EnergyLevel[4], value:4 },
    {name: EnergyLevel[5], value:5 },
  ]
  priorities = [
    {name: Priorities[0], value:0 },
    {name: Priorities[1], value:1 },
    {name: Priorities[2], value:2 },
    {name: Priorities[3], value:3 },
    {name: Priorities[4], value:4 },
  ]
  statuses = [
    {name: Statuses[0], value:0 },
    {name: Statuses[1], value:1 },
  ]

  addConceptControls:IControlModel[] = [
    {
      name:"Name", 
      type:"string", 
      required:true, 
      default: '', 
    },
    {
      name:"Contact Type", 
      type:"stringChoice", 
      required:true, 
      default:1,
      stringChoices:this.contactTypeChoices
    },
    {
      name:"Where Do You Know Them From?", 
      type:"stringChoice", 
      required:true, 
      default:1,
      stringChoices:this.contextKnownFrom
    },
    {
      name:"How Important?", 
      type:"stringChoiceSet", 
      required:true, 
      default:1,
      stringChoices:this.priorities
    },
    {
      name:"Energy Level", 
      type:"stringChoiceSet", 
      required:true, 
      default:1,
      stringChoices:this.energyLevels
    },
    {
      name:"Years Known", 
      type:"number", 
      required:false, 
      default: 1, 
    },
    {
      name:"Initial Notes", 
      type:"longString", 
      required:false, 
      default: '', 
    },
    {
      name:"Email", 
      type:"email", 
      required:false, 
      default: '', 
    },
    {
      name:"Phone", 
      type:"string", 
      required:true, 
      default: '', 
    }
  ];

  constructor() { }; 

  ngOnInit(): void {
  }

}
 