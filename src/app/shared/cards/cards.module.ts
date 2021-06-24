import { NgModule } from '@angular/core';
import { NoteCardComponent } from './note-card/note-card.component';
import { GeneralCardComponent } from './general-card/general-card.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';



@NgModule({
  declarations: [
    NoteCardComponent,
    GeneralCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NoteCardComponent,
    GeneralCardComponent
  ]
})
export class CardsModule { }
