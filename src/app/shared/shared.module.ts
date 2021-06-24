import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { CardsModule } from './cards/cards.module';
import { TableModule } from './table/table.module';
import { TabModule } from './tab/tab.module';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';

const modules = [
  CardsModule,
  TableModule,
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
    KanbanComponent,

  ],
  imports: [
    modules
  ],
  exports:[
    modules,
    FormComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
