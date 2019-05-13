import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../common/services/projects.service';
import { Report } from '../common/models/report';
import { Router, ActivatedRoute } from '@angular/router';
import { FilesService } from '../common/services/files.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  public showSpinner = false;
  public reports: Array<Report> = new Array<Report>();

  constructor(
    private calendar: NgbCalendar,
    private _servProjects: ProjectsService,
    private _servFiles: FilesService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _toast: ToastrService,
  ) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
    this._activeRoute.params.subscribe(
      params => this.getReports(params)
    );
  }

  getReports({name='', city='', date=''}) {
    this.showSpinner = true;
    this._toast.show('Obteniendo los reportes de proyectos...')
    this._servProjects
    .getReports(name, city, date)
    .then( reports => this.reports=reports)
    .finally(()=>this.showSpinner=false);
  }

  deleteReport(report: Report) {
      let projectPath = Report.getProjectPath(report);
      confirm('¿Realmente deseas eliminar este reporte?')
      && this._servProjects
      .deleteReport(report.id_reporte)
      .then( () => this._servFiles.deleteFilesByPath(projectPath))
      .then( () => this._toast.success('Reporte eliminado correctamente'))
      .catch(() => this._toast.error('Ocurrió un problema al eliminar el reporte solicitado.'))
      .finally(()=>this._router.navigate(['/login']));
  }

  editReport(idReport: number) {
    this._router.navigate(['/report',{idReport}])
  }
}
