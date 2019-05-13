import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { environment as ENV } from 'src/environments/environment';
import { FilesService }  from 'src/app/common/services/files.service';
import { File } from 'src/app/common/models/file';


const MAX_CHAR = 130;

@Component({
  selector: 'app-modal-image-details',
  templateUrl: './modal-image-details.component.html',
  styleUrls: ['./modal-image-details.component.scss']
})
export class ModalImageDetailsComponent implements OnInit {

  @Input() public selectedImage: File  = null;
  public availableChars = 0;
  public comment        = '';
  public closeResult:   string;

  constructor(
    public _servActiveModal: NgbActiveModal,
    public _servFiles:  FilesService,
    public _toast:      ToastrService,
  ) { }

  ngOnInit() {
    this.comment        = this.selectedImage.comentario || '';
    this.availableChars = MAX_CHAR - this.comment.length;
  }
  
  onChangeText() {
    this.availableChars = MAX_CHAR - this.comment.length;
  }

  public close() {
    this._toast.warning('Actualizando comentario ...', '');
    this.selectedImage.comentario = this.comment;

    this._servFiles.updateFile(this.selectedImage)
    .then(()=>this._toast.success('Comentario agregado correctamente', ''))
    
    this._servActiveModal.close();
  }

  getLink(file: File){
    return `${ENV.bucketURL}/${file.id}.${file.extension}`;
  }
}
