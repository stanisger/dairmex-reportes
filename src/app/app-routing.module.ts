import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report/report.component';


const routes: Routes = [

    {
        path: '',
        component: LoginComponent
      },

{
    path: 'dashboard',
    component: DashboardComponent 
  },

  {
    path: 'report',
    component: ReportComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
