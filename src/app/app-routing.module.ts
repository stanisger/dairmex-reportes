import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report/report.component';
import { CommonUserGuard } from './common/guards/common-user.guard';
import { PrintReportComponent } from './print-report/print-report.component';

const routes: Routes = [
  { path: '',             component: LoginComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'dashboard',    component: DashboardComponent,   canActivate: [CommonUserGuard] },
  { path: 'report',       component: ReportComponent,      canActivate: [CommonUserGuard] },
  { path: 'print-report', component: PrintReportComponent, canActivate: [CommonUserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }