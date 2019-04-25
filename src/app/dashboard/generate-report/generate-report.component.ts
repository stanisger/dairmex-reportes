import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/common/services/projects.service';
import { Report } from 'src/app/common/models/report';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent implements OnInit {

  public storeName: string; 
  public city: string;
  public description: string;

  constructor(
    private _servProjects: ProjectsService,
    private _router: Router,
    private _toast: ToastrService,
  ) { }

  ngOnInit() {
  }

  insertReport(){
    this._servProjects
    .addReport(new Report(this.storeName, this.city, this.description))
    .then(() => this._toast.success('Reporte agregado correctamente'))
    .catch(() => this._toast.error('Ocurrió un problema al agregar el nuevo reporte.'))
    .finally(() => this._router.navigate(['login']));
  }
}
