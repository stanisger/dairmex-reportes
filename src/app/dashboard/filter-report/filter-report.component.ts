import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-report',
  templateUrl: './filter-report.component.html',
  styleUrls: ['./filter-report.component.scss']
})
export class FilterReportComponent implements OnInit {
  public name = '';
  public city = '';
  public date = '';

  constructor(
    private _servRouter: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activeRoute.params.subscribe(
      ({name='', city='', date=''}) => {
        this.name=name;
        this.city=city;
        this.date=date;
      }
    );
  }

  filterReports() {
    this._servRouter.navigate(['/dashboard', {
      name: this.name, city: this.city, date: this.date,
    }])
  }
}
