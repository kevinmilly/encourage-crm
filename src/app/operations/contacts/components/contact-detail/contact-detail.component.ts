import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note, Contact } from '@operations/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'enccrm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact:Contact | undefined;
  notes:Note[] = [];

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { contact:Contact, notes: Observable<Note[]> },
    private dialogRef: MatDialogRef<ContactDetailComponent>
  ) { }

  ngOnInit(): void {
    this.contact = this.data.contact;
    this.notes = this.data.notes;

  }

}
