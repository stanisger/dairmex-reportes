import { Component, OnInit, Input, Output } from '@angular/core';
import { Report } from 'src/app/common/models/report';
import { FilesService } from 'src/app/common/services/files.service';
import { Base64Utils } from 'src/app/common/utils/base64';
import { File } from 'src/app/common/models/file';
import { environment as ENV } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-files',
  templateUrl: './card-files.component.html',
  styleUrls: ['./card-files.component.scss']
})
export class CardFilesComponent implements OnInit {
  @Input() report: Report;
  @Input() path: string;
  @Input() title: string

  public filesToUpload: Array<any> = [];
  public filesUploaded: Array<any> = [];
  public showSpinner = false;

  constructor(
    private _servFiles: FilesService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.path = this.getPath()
    this.getFilesUploaded();
  }

  getPath() {
    let reportPath = Report.getProjectPath(this.report);
    return `${reportPath}/${this.path}`;
  }

  fileExists(file) {
    let flag = this.filesToUpload.find(f=>f.name==file.name) 
            || this.filesUploaded.find(f=>f.nombre+'.'+f.extension==file.name);
    !!flag && alert('Ya existe un archivo con ese nombre.');
    return !!flag;
  }

  addFileToUpload({target:{files:[file,]}}) {
    file.temporalPath = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    !!file && !this.fileExists(file) && this.filesToUpload.push(file);
  }

  deleteFileToUpload(file) {
    this.filesToUpload = this.filesToUpload.filter(b=>b!=file);
  }

  deleteFileUploaded(idFile: number) {
    this.showSpinner=true;
    this._servFiles.deleteFileByID(idFile)
    .then((file) => this.getFilesUploaded())
    .finally(()=>this.showSpinner=false);
  }

  getFilesUploaded(){
    this.showSpinner=true;
    this._servFiles
    .getFilesByPath(this.path)
    .then(files => (this.filesUploaded=files))
    .finally(()=>this.showSpinner=false);
  }

  uploadFiles() {
    this.showSpinner=true;
    Promise.all(
      this.filesToUpload.map(file => Base64Utils.file2Base64(file))
    ).then( files => this._servFiles
      .addFilesToPath(files, this.path) )
    .then( () => {
      this.filesToUpload=[];
      this.getFilesUploaded();
    })
    .catch( () => {
      alert('Ocurrió un error al subir los archivos.');
      this.getFilesUploaded();
    })
    .finally(()=>this.showSpinner=false);
  }
  
  getLink(file: File){
    return `${ENV.bucketURL}/${file.id}.${file.extension}`;
  }
}