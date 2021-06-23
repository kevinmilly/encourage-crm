import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [LayoutModule, LoginComponent]
})
export class CoreModule { }
