import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '@core/auth/models/users';



@Component({
  selector: 'enccrm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() user:User = {} as User;

  constructor() { }

  ngOnInit(): void {
  }

}
