import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './state/reducers/notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './state/effects/notes.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNotes.noteFeatureKey, fromNotes.noteReducer),
    EffectsModule.forFeature([NoteEffects])
  ]
})
export class NotesModule { }
