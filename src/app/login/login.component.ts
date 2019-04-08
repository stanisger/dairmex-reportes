import { Component, OnInit } from '@angular/core';
import { DAIRMEX_LOGO } from '../common/assets/assets';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public DAIRMEX_LOGO = DAIRMEX_LOGO;

  constructor() {}

  ngOnInit() {
  }

}
