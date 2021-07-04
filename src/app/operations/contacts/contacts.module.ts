import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactKanbanComponent } from './components/contact-kanban/contact-kanban.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactRoutingModule } from './contacts.routing.module';
import * as fromConceptReducer from './state/index';



@NgModule({
  declarations: [
   ContactListComponent,
   ContactKanbanComponent,
   AddContactComponent,
   EditContactComponent,
   ContactDetailComponent
  ],
  imports: [
    SharedModule,
    ContactRoutingModule,
    StoreModule.forFeature("contactsReducer", fromConceptReducer.contactReducer),
    EffectsModule.forFeature([fromConceptReducer.ContactEffects])
  ],
  entryComponents:[
    AddContactComponent
  ]
})
export class ContactsModule { }
 