import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    SharedModule
 
  ],
  exports:[
    HeaderComponent,
    SidenavComponent
  ]
})
export class LayoutModule { }
