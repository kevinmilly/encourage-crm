import { NgModule } from '@angular/core';
import { ContactComponent } from './contacts/components/contact/contact.component';
import { ContactListComponent } from './contacts/components/contact-list/contact-list.component';
import { ContactKanbanComponent } from './contacts/components/contact-kanban/contact-kanban.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { EditContactComponent } from './contacts/components/edit-contact/edit-contact.component';
import { CommunicationComponent } from './communications/components/communication/communication.component';
import { CommunicationListComponent } from './communications/components/communication-list/communication-list.component';
import { NotesListComponent } from './notes/components/notes-list/notes-list.component';
import { NotesComponent } from './notes/components/notes/notes.component';
import { AddNoteComponent } from './notes/components/add-note/add-note.component';
import { EditNoteComponent } from './notes/components/edit-note/edit-note.component';
import { NoteService } from './notes/services/note.service';
import { CommunicationService } from './communications/services/communication.service';
import { ContactService } from './contacts/services/contact.service';
import { AddCommunicationComponent } from './communications/components/add-communication/add-communication.component';
import { EditCommunicationComponent } from './communications/components/edit-communication/edit-communication.component';
import { OperationsRoutingModule } from './operations.routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material/material.module';



@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactKanbanComponent,
    AddContactComponent,
    EditContactComponent,
    EditCommunicationComponent,
    AddCommunicationComponent,
    CommunicationComponent,
    CommunicationListComponent,
    NotesListComponent,
    NotesComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    OperationsRoutingModule,
    SharedModule
  ],
  providers: [NoteService,CommunicationService,ContactService],
})
export class OperationsModule { }
