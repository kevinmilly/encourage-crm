import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { MaterialModule } from '@shared/material/material.module';
import { CardsModule } from '@shared/cards/cards.module';



@NgModule({
  declarations: [
    TabComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CardsModule
  ],
  exports:[TabComponent]
})
export class TabModule { }
