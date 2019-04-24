import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { DAIRMEX_LOGO } from '../common/assets/assets';
import { AuthService } from '../common/services/auth.service';

//routerLink="/dashboard"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public DAIRMEX_LOGO = DAIRMEX_LOGO;
  public user = '';
  public password = '';
  public showSpinner = false;

  constructor(
    private _servAuth: AuthService,
    private _router: Router,
  ) {}

  ngOnInit() {
    if (this._servAuth.isAuthenticated()) {
      this._router.navigate(['/dashboard']);
    }
  }

  getSession() {
    this.showSpinner=true;
    this._servAuth
    .login(this.user, this.password)
    .finally(()=>this.showSpinner=false);
  }
}
