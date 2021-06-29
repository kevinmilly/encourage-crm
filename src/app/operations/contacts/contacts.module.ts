import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { ContactRoutingModule } from './contacts.routing.module';
import * as fromConcepts from './index';
import * as fromConceptReducer from './state/index';



@NgModule({
  declarations: [
    fromConcepts.ContactListComponent,
    fromConcepts.ContactKanbanComponent,
    fromConcepts.AddContactComponent,
    fromConcepts.EditContactComponent,
    fromConcepts.ContactDetailComponent
  ],
  imports: [
    SharedModule,
    ContactRoutingModule,
    StoreModule.forFeature("contactsReducer", fromConceptReducer.contactReducer),
    EffectsModule.forFeature([fromConceptReducer.ContactEffects])
  ]
})
export class ContactsModule { }
 