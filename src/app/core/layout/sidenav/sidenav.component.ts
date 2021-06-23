import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from '@core/auth/models/users';



@Component({
  selector: 'enccrm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() user: User = {} as User;
  @ViewChild(MatSidenav) sidenav: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidenav.toggle()
  }

}
