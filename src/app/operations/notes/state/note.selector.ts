import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, NoteState } from "@operations/notes/state/note.reducer";

export const selectNoteState = createFeatureSelector<NoteState>(
    'notesState'
)

export const selectNotes = createSelector(
    selectNoteState, 
    selectAll
); 