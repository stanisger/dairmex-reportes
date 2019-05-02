import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/common/models/report';
import { FilesService } from 'src/app/common/services/files.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FilesComponentAstract } from 'src/app/common/abstraact/files-component.abstract';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.scss']
})
export class CardImagesComponent  extends FilesComponentAstract implements  OnInit {
  @Input() report: Report;
  @Input() path: string;
  @Input() title: string

  constructor(
    public _servFiles: FilesService,
    public _sanitizer: DomSanitizer,
    public _toast:     ToastrService,
    private modalService: NgbModal
  ) { super(_servFiles, _sanitizer, _toast) }

  ngOnInit() {
    this.path = this.getPath()
    this.getFilesUploaded();
  }

  closeResult: string;

  public open(content) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}


