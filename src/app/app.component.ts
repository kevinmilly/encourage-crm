import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private auth: AuthService, private router: Router) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      console.log({user});
      this.router.navigate(["/contacts"]);
    });
  }

  toggleSideNav() {
    this.sidenavComponent.sidenav.toggle();
  }
}
