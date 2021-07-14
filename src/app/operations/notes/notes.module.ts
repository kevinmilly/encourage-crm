import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './state/reducers/notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffects } from './state/effects/notes.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.reducer),
    EffectsModule.forFeature([NotesEffects])
  ]
})
export class NotesModule { }
