import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll } from "@operations/contacts/state/contact.reducer";
import {  ContactState } from "@operations/contacts/state/contact.reducer";

export const selectContactState = createFeatureSelector<ContactState>(
    'contactsReducer'
)

export const selectContacts = createSelector(
    selectContactState, 
    selectAll
); 