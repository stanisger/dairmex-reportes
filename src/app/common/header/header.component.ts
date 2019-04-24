import { Component, OnInit } from '@angular/core';
import { DAIRMEX_LOGO, ADMIN_ICON } from '../assets/assets';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {  
  public DAIRMEX_LOGO = DAIRMEX_LOGO;
  public ADMIN_ICON = ADMIN_ICON;
  public userName: string = '';

  constructor(
    private _servAuth: AuthService,
  ) { }

  ngOnInit() {
    this.userName = this._servAuth.getUserName();
  }

  logout(){
    this._servAuth.logout();
  }
}
