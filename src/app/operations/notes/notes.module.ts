import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import * as fromNotes from './index';
import * as fromNotesStore from './state/index'
import { NotesRoutingModule } from './notes.routing.module';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    fromNotes.AddNoteComponent,
    fromNotes.EditNoteComponent,
    fromNotes.NotesListComponent
  ],
  imports: [
   SharedModule,
   NotesRoutingModule,
   StoreModule.forFeature("notesReducer", fromNotesStore.noteReducer)
  ]
})
export class NotesModule { }
