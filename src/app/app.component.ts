import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from '@core/layout/sidenav/sidenav.component';
import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'encouragement-crm';

  user: any;

  @ViewChild(SidenavComponent)
  sidenavComponent: any;

  constructor(private auth: AuthService) {
    this.user = this.auth.user;
    console.dir(this.user);
  }

  toggleSideNav() {
    this.sidenavComponent.sidenav.toggle();
  }
}
