import { ElementRef, Inject, TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ContactType, Context, EnergyLevel, Priorities, Statuses } from '@operations/contacts';
import { ContactMetricService } from '@operations/contacts/services/contact-metric.service';
import { Contact, Task } from '@operations/index';
import { Note, NoteOptions } from '@operations/notes';
import { TaskOptions } from '@operations/task';
import { selectTasks } from '@operations/task/state/selectors/task.selectors';
import { IControlModel } from '@shared/models/control.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'enccrm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  metricTemplate!: TemplateRef<HTMLElement>;
  rating:number = 0;
  diagnosis:string = '';

  editOpen=false;
  contact!: Contact;
  tasks$:Observable<Task[]> | undefined;
  notes$:Observable<Note[]> | undefined;


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

  taskPipeOptions:any;
  notePipeOptions:any;


  editConceptControls: IControlModel[] = [];

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { 
        contact:Contact, 
        tasks:Observable<Task[]>,
        notes:Observable<Note[]>,
        metric:TemplateRef<HTMLElement>
      },
      public contactMetricService:ContactMetricService,
      private dialogRef: MatDialogRef<ContactDetailComponent>,
      private store: Store
  ) { }

  ngOnInit(): void {
    this.contact = this.data.contact;
    this.tasks$ = this.data.tasks;
    this.notes$ = this.data.notes;
    this.metricTemplate = this.data.metric;

    this.rating = this.contactMetricService.getContactRating([
      +this.contact.energyLevel,
      +this.contact.priority
    ],10)

    
    this.editConceptControls = [
      { 
        displayName: "Name",
        controlName: "contactName",
        type: "string",
        required: true,
        default: this.contact.contactName,
      },
      {
        displayName: "Contact Type",
        controlName: "contactType",
        type: "stringChoice",
        required: true,
        default: this.contact.contactType,
        stringChoices: this.contactTypeChoices
      },
      {
        displayName: "Know From?",
        controlName: "known",
        type: "stringChoice",
        required: true,
        default: this.contact.known,
        stringChoices: this.contextKnownFrom
      },
      {
        displayName: "How Important?",
        controlName: "priority",
        type: "stringChoiceSet",
        required: true,
        default: this.contact.priority,
        stringChoices: this.priorities
      },
      {
        displayName: "Energy Level",
        controlName: "energyLevel",
        type: "stringChoiceSet",
        required: true,
        default: this.contact.energyLevel,
        stringChoices: this.energyLevels
      },
      {
        displayName: "Birth Date",
        controlName: "birthDate",
        type: "date",
        required: false,
        default: this.contact.birthDate,
      },
      {
        displayName: "Other Date",
        controlName: "otherDate",
        type: "date",
        required: false,
        default: this.contact.otherDate,
      },
      {
        displayName: "Email",
        controlName: "email",
        type: "email",
        required: false,
        default: this.contact.email,
      },
      {
        displayName: "Phone",
        controlName: "phone",
        type: "string",
        required: true,
        default: this.contact.phone,
      },
      {
        displayName: "Initial Notes",
        controlName: "description",
        type: "longString",
        required: false, 
        default: this.contact.description,
      }
    ];

    this.taskPipeOptions  = [
      TaskOptions[0],
      TaskOptions[1], 
      TaskOptions[2]
    ]

    this.notePipeOptions = [
      NoteOptions[0],
      NoteOptions[1],
      NoteOptions[2],
      NoteOptions[3]
    ]

  }

  submit(event:any) {


  }

}
