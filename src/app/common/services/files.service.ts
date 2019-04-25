import { Injectable } from '@angular/core';
import { File } from '../models/file';
import { environment as ENV } from 'src/environments/environment';
import { Base64Utils } from '../utils/base64';


@Injectable()
export class FilesService {
  
  addFile(file){
    console.log(file)
    return fetch(
      `${ENV.apiFiles}`, {
          method: 'POST',
          headers:new Headers({
            'Authorization': `Basic ${ENV.filesAPIToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }),
          body: JSON.stringify(file)
      }
    ).then(res => res.json());
  }

  addFilesToPath(files, path: string): Promise<Array<File>> {
      return fetch(
        `${ENV.apiFiles}/ubicacion/${Base64Utils.utf8_to_b64(path)}`,{
            method: 'POST',
            headers:new Headers({
              'Authorization': `Basic ${ENV.filesAPIToken}`,
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(files)
        }
      ).then(res => res.json());
  }

  deleteFilesByPath(path: string) {
    return fetch(
      `${ENV.apiFiles}/subespacio/${Base64Utils.utf8_to_b64(path)}`,{
          method: 'DELETE',
          headers:new Headers({
            'Authorization': `Basic ${ENV.filesAPIToken}`,
            'Accept': 'application/json'
          }),
      }
    ).then(res => res.json());
  }

  getFilesByPath(path: string): Promise<Array<File>> {
    return fetch(
      `${ENV.apiFiles}/subespacio/${Base64Utils.utf8_to_b64(path)}`,{
          method: 'GET',
          headers:new Headers({
            'Authorization': `Basic ${ENV.filesAPIToken}`,
            'Accept': 'application/json'
          }),
      }
    ).then(res => res.json());
  }

  deleteFileByID(idFile: number): Promise<File>{
    return fetch(
      `${ENV.apiFiles}/id/${idFile}`,{
          method: 'DELETE',
          headers:new Headers({
            'Authorization': `Basic ${ENV.filesAPIToken}`,
            'Accept': 'application/json'
          }),
      }
    ).then(res => res.json());
  }
}