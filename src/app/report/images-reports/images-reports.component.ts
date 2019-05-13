import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Report } from 'src/app/common/models/report';
import { Equipment } from 'src/app/common/models/equipment';

@Component({
  selector: 'app-images-reports',
  templateUrl: './images-reports.component.html',
  styleUrls: ['./images-reports.component.scss']
})
export class ImagesReportsComponent implements OnInit {

  @Input() report: Report;
  @Input() equipment: Equipment;
  @Output('delete-equipment') evtDeleteEquipment = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteEquipment() {
    this.evtDeleteEquipment.emit(this.equipment.id_equipo);
  }
}
