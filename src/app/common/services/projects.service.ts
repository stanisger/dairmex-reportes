import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { Report } from '../models/report';

@Injectable()
export class ProjectsService {
    
    getReports(): Promise<Array<Report>> {
        return fetch(ENV.apiProyects,{
            method: 'GET',
            credentials: "include"
          })
        .then(res => res.json())
    }

    deleteReport(idReport: number): Promise<Report> {
        return fetch(
        `${ENV.apiProyects}/reporte?id=${idReport}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res=>res.json());
    }

    addReport(report: Report): Promise<Report> {
        return fetch(
            `${ENV.apiProyects}/reporte`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(report)
        })
        .then(res=>res.json());
    }

    getReport(idReport: number): Promise<Report> {
        return fetch(
            `${ENV.apiProyects}/reporte?id=${idReport}`, {
                method: 'GET',
                credentials: 'include'
        })
        .then(res=>res.json());
    }
}