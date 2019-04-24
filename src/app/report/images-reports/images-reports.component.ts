import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/common/models/report';

@Component({
  selector: 'app-images-reports',
  templateUrl: './images-reports.component.html',
  styleUrls: ['./images-reports.component.scss']
})
export class ImagesReportsComponent implements OnInit {

  @Input() report: Report;

  constructor() { }

  ngOnInit() {
  }

}
