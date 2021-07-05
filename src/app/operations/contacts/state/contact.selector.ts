import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, ContactState } from "@operations/contacts/state/contact.reducer";

export const selectContactState = createFeatureSelector<ContactState>(
    'contacts'
)

export const selectContacts = createSelector(
    selectContactState, 
    selectAll
);