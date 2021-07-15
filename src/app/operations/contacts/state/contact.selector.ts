import { createFeatureSelector, createSelector } from "@ngrx/store";
import { contactFeatureKey, selectAll } from "@operations/contacts/state/contact.reducer";
import {  ContactState } from "@operations/contacts/state/contact.reducer";

export const selectContactState = createFeatureSelector<ContactState>(
    contactFeatureKey
)

export const selectContacts = createSelector(
    selectContactState, 
    selectAll
);  