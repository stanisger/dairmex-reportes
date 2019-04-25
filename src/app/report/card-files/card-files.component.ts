import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/common/models/report';
import { FilesService } from 'src/app/common/services/files.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FilesComponentAstract } from 'src/app/common/abstraact/files-component.abstract';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-files',
  templateUrl: './card-files.component.html',
  styleUrls: ['./card-files.component.scss']
})
export class CardFilesComponent extends FilesComponentAstract implements OnInit {
  @Input() report: Report;
  @Input() path: string;
  @Input() title: string

  constructor(
    public _servFiles: FilesService,
    public _sanitizer: DomSanitizer,
    public _toast:     ToastrService
  ) { super(_servFiles, _sanitizer, _toast) }

  ngOnInit() {
    this.path = this.getPath()
    this.getFilesUploaded();
  }
}