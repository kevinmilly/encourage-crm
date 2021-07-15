import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNotes from '../reducers/notes.reducer';

export const selectNotesState = createFeatureSelector<fromNotes.NoteState>(
  fromNotes.noteFeatureKey
);


export const selectNotes = createSelector(
  selectNotesState,
  fromNotes.selectAll
)