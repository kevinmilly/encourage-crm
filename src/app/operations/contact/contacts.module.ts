import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactListComponent } from './components/contacts/contact-list.component';
import { ContactRoutingModule } from './contacts.routing.module';
import * as fromConceptReducer from './state/index';
import { RatingColorPipe } from './pipes/rating-color.pipe';


@NgModule({
  declarations: [
    ContactListComponent,
    AddContactComponent,
    ContactDetailComponent,
    RatingColorPipe
  ],
  imports: [
    SharedModule,
    ContactRoutingModule,
    EffectsModule.forFeature([fromConceptReducer.ContactEffects]),
  ],
  entryComponents: [
    AddContactComponent
  ]
})
export class ContactsModule { }
