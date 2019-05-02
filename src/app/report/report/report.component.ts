import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/common/services/projects.service';
import { Report } from 'src/app/common/models/report';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public idReport: string;
  public report: Report;

  constructor(
    private _route: ActivatedRoute,
    private _servProjects: ProjectsService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      ({idReport}) => this.initReport(idReport)
    )
  }

  initReport(idReport) {
    if (!idReport) {return;}

    this.idReport = idReport;
    this._servProjects
    .getReport(idReport)
    .then(report => this.report=report);
  }

  getProjectPath() {
    return Report.getProjectPath(this.report);
  }

  printReport() {
    let t1 = window.open("print-report")
    t1.onload=(function () {
      t1.print()
      setTimeout(function () {
        t1.close()
      }, 1700)
    })

  }
}
