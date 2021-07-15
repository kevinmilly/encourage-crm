import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './state/reducers/notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './state/effects/notes.effects';
import { NotesRoutingModule } from './notes.routing.module';
import { SharedModule } from '@shared/shared.module';
import { NoteListComponent } from './components/note-list/note-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';



@NgModule({
  declarations: [NoteListComponent,AddNoteComponent,NoteDetailComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromNotes.noteFeatureKey, fromNotes.noteReducer),
    EffectsModule.forFeature([NoteEffects])
  ],
  entryComponents:[NoteDetailComponent]
})
export class NotesModule { }
