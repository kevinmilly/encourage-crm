import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashCardComponent } from './dash-card/dash-card.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { GeneralCardComponent } from './general-card/general-card.component';



@NgModule({
  declarations: [
    DashCardComponent,
    NoteCardComponent,
    GeneralCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
