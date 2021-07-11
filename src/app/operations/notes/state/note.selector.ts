import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, NoteState, notesFeatureKey } from "@operations/notes/state/note.reducer";

export const selectNoteState = createFeatureSelector<NoteState>(
    notesFeatureKey
)

export const selectNotes = createSelector(
    selectNoteState, 
    selectAll
); 