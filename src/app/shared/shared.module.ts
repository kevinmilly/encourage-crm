import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { CardsModule } from './cards/cards.module';
import { TabModule } from './tab/tab.module';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { EnumUserDisplayTranslatorPipe } from './pipes/enum-user-display-translator.pipe';
import { TableComponent } from './table/table.component';


const modules = [
  CardsModule,
  TabModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
  RouterModule
]


@NgModule({
  declarations: [
    FormComponent,
    ButtonComponent,
    TableComponent,
    EnumUserDisplayTranslatorPipe

  ],
  imports: [
    modules
  ],
  exports:[
    modules,
    FormComponent,
    ButtonComponent,
    TableComponent
  ]
})
export class SharedModule { }
