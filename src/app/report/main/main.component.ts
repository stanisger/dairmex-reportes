import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/common/models/report';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() report: Report;

  constructor() { }

  ngOnInit() { }


}
