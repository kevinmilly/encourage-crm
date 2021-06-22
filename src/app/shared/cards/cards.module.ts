import { NgModule } from '@angular/core';
import { DashCardComponent } from './dash-card/dash-card.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { GeneralCardComponent } from './general-card/general-card.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';



@NgModule({
  declarations: [
    DashCardComponent,
    NoteCardComponent,
    GeneralCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DashCardComponent,
    NoteCardComponent,
    GeneralCardComponent
  ]
})
export class CardsModule { }
