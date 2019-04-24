import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/common/models/report';

@Component({
  selector: 'app-mainor',
  templateUrl: './mainor.component.html',
  styleUrls: ['./mainor.component.scss']
})
export class MainorComponent implements OnInit {

  @Input() report: Report;
  
  constructor() { }

  ngOnInit() {
  }

}
