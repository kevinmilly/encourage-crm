import { NgModule } from '@angular/core';
import { ModalCardComponent } from './modal-card/modal-card.component';
import { GeneralCardComponent } from './general-card/general-card.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';



@NgModule({
  declarations: [
    ModalCardComponent,
    GeneralCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ModalCardComponent,
    GeneralCardComponent
  ]
})
export class CardsModule { }
