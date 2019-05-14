import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Equipment } from 'src/app/common/models/equipment';
import { Report } from 'src/app/common/models/report';

@Component({
  selector: 'app-modal-add-equipment',
  templateUrl: './modal-add-equipment.component.html',
  styleUrls: ['./modal-add-equipment.component.scss']
})
export class ModalAddEquipmentComponent implements OnInit {

  @Input() report: Report;
  public equipmentName: string = '';
  public equipmentType: string = '';

  constructor(
    public _servActiveModal: NgbActiveModal,
    public _toast:     ToastrService,
  ) { }

  ngOnInit() {}
  
  addEquipment() {
    this._servActiveModal.close(
      new Equipment(this.equipmentName, this.equipmentType, this.report.id_reporte)
    )
  }

  closeModal() {
    this._servActiveModal.close(false);
  }
}
