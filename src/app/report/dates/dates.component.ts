import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/common/models/report';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  @Input() report: Report;

  constructor() { }

  ngOnInit() {
  }

}
