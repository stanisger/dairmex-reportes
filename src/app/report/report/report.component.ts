import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectsService } from 'src/app/common/services/projects.service';
import { Report } from 'src/app/common/models/report';
import { ModalAddEquipmentComponent } from '../modal-add-equipment/modal-add-equipment.component';
import { Equipment } from 'src/app/common/models/equipment';
import { EquipmentsService } from 'src/app/common/services/equipments.service';
import { ToastrService } from 'ngx-toastr';
import { FilesService } from 'src/app/common/services/files.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public idReport: string;
  public report: Report;
  public equipments: Array<Equipment> = [];

  constructor(
    private _route:          ActivatedRoute,
    private _servProjects:   ProjectsService,
    private _servEquipments: EquipmentsService, 
    private _servFiles:      FilesService,
    private _servModal:      NgbModal,
    private _toast:          ToastrService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      ({idReport}) => this.initReport(idReport)
    )
  }

  initReport(idReport) {
    if (!idReport) {return;}

    this._servProjects
    .getReport(idReport)
    .then(report => this.report=report)
    .then(report => this.getEquipments());
  }

  getEquipments() {
    return this._servEquipments
    .getEquipmentsPerReport(this.report.id_reporte)
    .then(equipments => this.equipments = equipments);
  }

  getProjectPath() {
    return Report.getProjectPath(this.report);
  }

  printReport() {
    let t1 = window.open(`print-report;idReport=${this.report.id_reporte}`)
  }

  addEquipment() {
    let modalAddEquipment = this._servModal.open(ModalAddEquipmentComponent)
    modalAddEquipment.componentInstance.report = this.report;

    modalAddEquipment.result.then((ne: Equipment) => {
      this._toast.show('Agregando equipo ...');
      
      ne && !this.equipments.find(e => e.nombre_de_equipo===ne.nombre_de_equipo)
      ? this._servEquipments.addEquipment(ne)
        .then(ne => this._toast.success('Equipo agregado correctamente.'))
        .then(() => this.getEquipments())
      : this._toast.error('Ya existe un equipo con este nombre')
    })
    .catch(()=>{})
  }

  deleteEquipment(idEquipment: number) {
    this._toast.show('Eliminando todos los datos del equipo ...');
    
    this._servEquipments
    .deleteEquipment(idEquipment)
    .then(ne => this._servFiles.deleteFilesByPath(this.getEquipmentPath(idEquipment)))
    .then(() => this._toast.success('Equipo eliminado correctamente.'))
    .then(()=>this.getEquipments());
  }

  getEquipmentPath(idEquipment) {
    let equipment = this.equipments.find(e=>e.id_equipo===idEquipment);
    let reportPath    = Report.getProjectPath(this.report);
    let equipmentPath = Equipment.getEquipmentPath(equipment);
    return `${reportPath}/${equipmentPath}`;
  }
}
