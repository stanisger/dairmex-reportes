import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Report } from 'src/app/common/models/report';
import { FilesService } from 'src/app/common/services/files.service';
import { FilesComponentAstract } from 'src/app/common/abstraact/files-component.abstract';
import { ModalImageDetailsComponent } from '../modal-image-details/modal-image-details.component';
import { Equipment } from 'src/app/common/models/equipment';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.scss']
})
export class CardImagesComponent extends FilesComponentAstract implements  OnInit {
  @Input() report: Report;
  @Input() path:   string;
  @Input() title:  string;
  @Input() equipment: Equipment;
  
  constructor(
    public _sanitizer: DomSanitizer,
    public _servFiles: FilesService,
    public _servModal: NgbModal,
    public _toast:     ToastrService,
  ) { super(_servFiles, _sanitizer, _toast) }

  public ngOnInit() {
    this.path = this.getPath()
    this.getFilesUploaded();
  }

  getPath() {
    let reportPath    = Report.getProjectPath(this.report);
    let equipmentPath = Equipment.getEquipmentPath(this.equipment);
    return `${reportPath}/${equipmentPath}/${this.path}`;
  }

  openImageDetails(image) {
    this._servModal.open(ModalImageDetailsComponent)
    .componentInstance.selectedImage = image
  }
}