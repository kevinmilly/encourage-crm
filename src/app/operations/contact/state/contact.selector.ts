import { createFeatureSelector, createSelector } from "@ngrx/store";
import { contactFeatureKey, selectAll } from "@operations/contact/state/contact.reducer";
import {  ContactState } from "@operations/contact/state/contact.reducer";

export const selectContactState = createFeatureSelector<ContactState>(
    contactFeatureKey
)

export const selectContacts = createSelector(
    selectContactState, 
    selectAll
);  