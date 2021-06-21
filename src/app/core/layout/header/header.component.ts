import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-header',
  template: `
              <mat-toolbar class="toolbar mat-elevation-z6">
              <mat-toolbar-row>
                <div class="row-container">
                  <div class="row-container__title-elements" fxLayout="row" fxLayoutAlign="space-evenly center" >
                    <h1 class="title">Encouragement <span class="emphasis-portion">
                      <span style="color:#1daf9e">C</span>
                      <span style="color:#ffa706">R</span>
                      <span style="color:#d81159">M</span>
                      </span></h1>
                    <button mat-icon-button (click)="onToggle()">
                      <mat-icon>menu</mat-icon>
                    </button>
                  </div>
                  <div *ngIf="username" class="username">
                    Welcome {{username}}!
                  </div>
                </div>
              </mat-toolbar-row>

            </mat-toolbar>
            <div class="toolbar__content">
                <ng-content></ng-content>
            </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
