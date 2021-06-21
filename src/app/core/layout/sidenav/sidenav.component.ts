import { Component, OnInit } from '@angular/core';
import { User } from '@core/auth/models/users';



@Component({
  selector: 'enccrm-sidenav',
  template: `
            <mat-sidenav-container hasBackdrop="false">
            <mat-sidenav #sidenav opened="true" mode="over">
              <img  src="{{user.photoURL}}" alt="user photo"> <br/>
              <mat-nav-list>
                  <mat-list-item> 
                      <mat-icon>contacts</mat-icon>
                      <span> Contacts </span>
                  </mat-list-item>
                      <mat-nav-list style="margin-left:3rem;">
                          <a  mat-list-item class="link-text" [routerLink]="'/operations'"  routerLinkActive="router-link-active" >
                          </a>
                      </mat-nav-list>
                      <mat-list-item> 
                          <mat-icon>chat</mat-icon>
                          <span > Communication  </span>
                      </mat-list-item>
                      <mat-nav-list style="margin-left:3rem;">
                          <a  mat-list-item class="link-text"  [routerLink]="'/operations'"  routerLinkActive="router-link-active" >
                          </a>
                      </mat-nav-list>
                      <mat-list-item> 
                          <mat-icon>leaderboard</mat-icon>
                          <span c> Metrics </span>
                      </mat-list-item>
                      <mat-nav-list style="margin-left:3rem;">
                          <a  mat-list-item class="link-text"  [routerLink]="'/operations'"  routerLinkActive="router-link-active" >
            
                          </a>
                      </mat-nav-list>
                  </mat-nav-list>
              <div class="background"></div>
              <div class="background-cover"></div>
            </mat-sidenav>

            <mat-sidenav-content>
              <div class="content">
                <ng-content></ng-content>
              </div>
            </mat-sidenav-content>
          
          </mat-sidenav-container> 
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user:User = {} as User;

  constructor() { }

  ngOnInit(): void {
  }

}
