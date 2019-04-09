import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
    MainorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

