import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/common/services/projects.service';
import { Report } from 'src/app/common/models/report';
import { FilesService } from '../common/services/files.service';
import { File } from '../common/models/file';
import { environment as ENV } from 'src/environments/environment';
import { EquipmentsService } from '../common/services/equipments.service';
import { Equipment } from '../common/models/equipment';

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.component.html',
  styleUrls: ['./print-report.component.scss']
})
export class PrintReportComponent implements OnInit {

  public lastGroupPrint = '';
  public report:     Report;
  public equipments: Array<Equipment> = [];
  public files:      Array<File> = [];

  
  constructor(
    private _route: ActivatedRoute,
    private _servProjects: ProjectsService,
    private _servEquipments: EquipmentsService,
    private _servFiles: FilesService,
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
    .then(report   => this.report = report)
    .then(() => this._servFiles.getFilesByPath(Report.getProjectPath(this.report)) )
    .then(files => this.files = files)
    .then(() => this._servEquipments.getEquipmentsPerReport(idReport))
    .then(equipments => this.equipments=equipments);
  }

  getLink(file: File) {
    return `${ENV.bucketURL}/${file.id}.${file.extension}`;
  }

  getFilesFromFolder(path) {
      return this.files
      .filter(file => file.ubicacion.match(new RegExp(`.*${path}.*`)))
  }

  getFilesGroupFrom(path) {
    let f = Math.floor, g = 3;

    return this
    .getFilesFromFolder(path)
    .reduce(
      (ws,c,i) => ( ( ws[f(i/g)] && ws[f(i/g)].push(c) ) || (ws[f(i/g)]=[c]) ) && ws , []
    );
  }

  groups(path) {
    return this.getFilesGroupFrom(`${path}/antes`)
      .concat(this.getFilesGroupFrom(`${path}/durante`))
      .concat(this.getFilesGroupFrom(`${path}/despues`));
  }

  getSheets(equipment: Equipment, path) {
    let equipmentPath = Equipment.getEquipmentPath(equipment);
    this.lastGroupPrint='';
    return this.createRange(Math.ceil(this.groups(`${equipmentPath}/${path}`).length/3))
  }

  getSheetsGroups(path, page) {
    let groups = this.groups(path);

    let subgroups=[];
    for (let i=(page-1)*3;i<page*3;i++) {
      subgroups.push(groups[i]);
    }
    return subgroups;
  }

  printTitleGroup(group) {
     if (group[0].ubicacion!=this.lastGroupPrint) {
         this.lastGroupPrint = group[0].ubicacion;
         return (
           this.lastGroupPrint.match(/.*antes.*/)    ? 'Antes'
           :this.lastGroupPrint.match(/.*durante.*/) ? 'Durante'
           :this.lastGroupPrint.match(/.*despues.*/) ? 'Después'
           :''
         );
     }
     return '';
  }

  /** 
   * https://stackoverflow.com/questions/36095496/angular-2-how-to-write-a-for-loop-not-a-foreach-loop
   */
  createRange(number) {
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  print(){
    window.print()
  }
}
