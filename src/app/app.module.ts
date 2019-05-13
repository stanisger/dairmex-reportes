import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report/report.component';
import { DatesComponent } from './report/dates/dates.component';
import { BreadcrumbComponent } from './report/breadcrumb/breadcrumb.component';
import { ImagesReportsComponent } from './report/images-reports/images-reports.component';
import { MainComponent } from './report/main/main.component';
import { MainorComponent } from './report/mainor/mainor.component';
import { ProjectsService } from './common/services/projects.service';
import { SessionService } from './common/services/sesion.service';
import { FilesService } from './common/services/files.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './common/services/auth.service';
import { CommonUserGuard } from './common/guards/common-user.guard';
import { GenerateReportComponent } from './dashboard/generate-report/generate-report.component';
import { CardFilesComponent } from './report/card-files/card-files.component';
import { CardImagesComponent } from './report/card-images/card-images.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { PrintReportComponent } from './print-report/print-report.component';
import { BtnSaveComponent } from './report/btn-save/btn-save.component';
import { ModalImageDetailsComponent } from './report/modal-image-details/modal-image-details.component';
import { ModalAddEquipmentComponent } from './report/modal-add-equipment/modal-add-equipment.component';
import { BtnAddEquipmentComponent } from './report/btn-add-equipment/btn-add-equipment.component';
import { EquipmentsService } from './common/services/equipments.service';
import { FilterReportComponent } from './dashboard/filter-report/filter-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    ReportComponent,
    DatesComponent,
    BreadcrumbComponent,
    ImagesReportsComponent,
    MainComponent,
    MainorComponent,
    GenerateReportComponent,
    CardFilesComponent,
    CardImagesComponent,
    SpinnerComponent,
    PrintReportComponent,
    BtnSaveComponent,
    ModalImageDetailsComponent,
    ModalAddEquipmentComponent,
    BtnAddEquipmentComponent,
    FilterReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
  ],
  providers: [
    ProjectsService,
    SessionService,
    FilesService,
    AuthService,
    CommonUserGuard,
    EquipmentsService,
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalImageDetailsComponent,
    ModalAddEquipmentComponent
  ]
})
export class AppModule { }

