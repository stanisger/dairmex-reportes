import { Report } from 'src/app/common/models/report';
import { FilesService } from 'src/app/common/services/files.service';
import { Base64Utils } from 'src/app/common/utils/base64';
import { File } from 'src/app/common/models/file';
import { environment as ENV } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

export class FilesComponentAstract {

  public filesToUpload: Array<any> = [];
  public filesUploaded: Array<any> = [];
  public showSpinner = false;
  public report: Report;
  public path: string;
  public _servFiles: FilesService;
  public _sanitizer: DomSanitizer;
  public _toast: ToastrService

  constructor(_servFiles: FilesService, _sanitizer: DomSanitizer, _toast: ToastrService) {
      this._servFiles = _servFiles;
      this._sanitizer = _sanitizer;
      this._toast = _toast;
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
    .then(() => this._toast.success(`Archivo eliminado correctamente.`)
                 && this.getFilesUploaded())
    .catch(()=>this._toast.error(`Ocurrio un problema al eliminar el archivo.`))
    .finally(()=>this.showSpinner=false);
  }

  getFilesUploaded(){
    this._servFiles
    .getFilesByPath(this.path)
    .then(files => (this.filesUploaded=files));
  }

  uploadFiles() {
    this.showSpinner=true;
    
    this._toast.warning('Subiendo archivos seleccionados. Dependiendo del número de ellos, esta acción puede tomar varios minutos.');
    this._toast.warning('No cierre la ventana ni la actualice mientras se realiza este proceso.');
    
    Promise.all(
      this.filesToUpload.map(file => Base64Utils.file2Base64(file))
    ).then( 
      files => files.map(file=>({...file, ubicacion: this.path}))
    ).then(
       files => {
         let requestCounter = 0;
 
         let recursivePromise = () => {
             requestCounter>0
             && this._toast.success(`Archivo No. ${requestCounter} subido correctamente.`);
             return requestCounter<files.length
             && this._servFiles.addFile(files[requestCounter++])
               .then(recursivePromise);
         }
         
         return recursivePromise();
       }
    ).then( () => {
      this.filesToUpload=[];
      this.getFilesUploaded();
    }).catch( () => {
      this.filesToUpload=[];
      this._toast.error('Ocurrió un error al subir algunos de los archivos.');
      this.getFilesUploaded();
    })
    .finally(()=>this.showSpinner=false);
  }
  
  getLink(file: File){
    return `${ENV.bucketURL}/${file.id}.${file.extension}`;
  }
}