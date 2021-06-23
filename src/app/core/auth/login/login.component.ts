import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'enccrm-login',
  template: `
    <div class="parent-container">
      <div class="parent-container__background"> </div>
      <div class="parent-container__background-cover"> </div>
      <div class="parent-container__context">Maximize your relationships</div>
      <div class="parent-container__login-button">
        <img src="../../../../assets/images/btn_google_signin.png" (click)="login()" />
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
    this.authService.googleSignin();
  }

}
