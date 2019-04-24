import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../common/services/projects.service';
import { Report } from '../common/models/report';
import { Router } from '@angular/router';
import { FilesService } from '../common/services/files.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  public reports: Array<Report> = new Array<Report>();

  constructor(
    private calendar: NgbCalendar,
    private _servProjects: ProjectsService,
    private _servFiles: FilesService,
    private _router: Router,
  ) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
    this._servProjects
    .getReports()
    .then( reports => this.reports=reports)
  }

  deleteReport(report: Report) {
      let projectPath = Report.getProjectPath(report);
      confirm('¿Realmente deseas eliminar este reporte?')
      && this._servProjects
      .deleteReport(report.id_reporte)
      .then(() => this._servFiles.deleteFilesByPath(projectPath))
      .then(() => alert('Reporte eliminado correctamente'))
      .catch(()=> alert('Ocurrió un problema al eliminar el reporte solicitado.'))
      .finally(()=>this._router.navigate(['/login']));
  }

  editReport(idReport: number) {
    this._router.navigate(['/report',{idReport}])
  }
}
