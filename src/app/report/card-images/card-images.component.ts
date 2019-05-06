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
  public selectedImage;
  public availableChars=0;
  public closeResult: string;
  public comentario='';
  
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

  

  public open(content, image) {
    console.log(image)
    this.selectedImage = image;
    this.comentario = this.selectedImage.comentario || '';
    this.availableChars = 130- this.comentario.length;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }
  
  onChangeText() {
    this.availableChars = 130-this.comentario.length;
  }

  public close(){
    this._toast.warning('Actualizando comentario ...', '');
    this.modalService.dismissAll();
    this.selectedImage.comentario = this.comentario;

    this._servFiles.updateFile(this.selectedImage)
    .then(()=>this._toast.success('Comentario agregado correctamente', ''))

  }
}


