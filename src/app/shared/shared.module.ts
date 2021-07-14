import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { CardsModule } from './cards/cards.module';
import { TabModule } from './tab/tab.module';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { EnumUserDisplayTranslatorPipe } from './pipes/contact-enum-display';
import { TableComponent } from './table/table.component';
import { ContactDetailTranslatorPipe } from './pipes/contact-detail-translator.pipe';
import { StoreModule } from '@ngrx/store';
import * as fromTask from '../operations/task/state/reducers/task.reducer';
import * as fromContactReducer from '@operations/contacts/state';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from '@operations/task/state';

const modules = [
  CardsModule,
  TabModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
  RouterModule,
  StoreModule.forFeature(fromTask.taskFeatureKey, fromTask.taskReducer), EffectsModule.forFeature([TaskEffects]),
  StoreModule.forFeature("contactsReducer", fromContactReducer.contactReducer),
]


@NgModule({
  declarations: [
    FormComponent,
    ButtonComponent,
    TableComponent,
    EnumUserDisplayTranslatorPipe,
    ContactDetailTranslatorPipe

  ],
  imports: [
    modules
  ],
  exports:[
    modules,
    FormComponent,
    ButtonComponent,
    TableComponent,
    EnumUserDisplayTranslatorPipe,
    ContactDetailTranslatorPipe
  ]
})
export class SharedModule { }
