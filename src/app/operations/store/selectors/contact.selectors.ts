import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromContactReducer from '../reducers/contact.reducer';
 

 
// export const selectContactsFeature = (state: fromContactReducer.ContactState) => state.entities;

export const selectContactsFeature = createFeatureSelector<fromContactReducer.ContactState>("contactsFeature");

 
export const selectFeatureContacts = createSelector(
  selectContactsFeature,
  (state:fromContactReducer.ContactState) => state.entities
);