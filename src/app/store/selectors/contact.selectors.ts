import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromContactReducer from '../reducers/contact.reducer';
 

 
export const selectContactsFeature = (state: fromContactReducer.ContactState) => state.contacts;


 
export const selectFeatureCount = createSelector(
  'contactStateFeature',
  (state:fromContactReducer.ContactState) => state.contacts
);