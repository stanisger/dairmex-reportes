import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/common/models/report';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() report: Report;

  constructor() { }

  ngOnInit() {
  }

}
