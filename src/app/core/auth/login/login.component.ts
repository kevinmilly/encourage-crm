import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-login',
  template: `
    <div class="parent-container">
      <div class="parent-container__background"> </div>
      <div class="parent-container__context">Maximize your relationships</div>
      <div class="parent-container__login-button">
        <img src="img/btn_google_signin.png" />
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
