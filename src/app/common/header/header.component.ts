import { Component, OnInit } from '@angular/core';
import { DAIRMEX_LOGO, ADMIN_ICON } from '../assets/assets';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {  
  public DAIRMEX_LOGO = DAIRMEX_LOGO;
  public ADMIN_ICON = ADMIN_ICON;
  
  constructor() { }

  ngOnInit() {}

}
