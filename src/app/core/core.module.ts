import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { CoreRoutingModule } from './core.routing.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule
  ],
  exports: [LayoutModule, LoginComponent]
})
export class CoreModule { }
