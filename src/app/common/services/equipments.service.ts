
import {Injectable} from '@angular/core';
import { Equipment } from '../models/equipment';
import { environment as ENV } from 'src/environments/environment';


@Injectable()
export class EquipmentsService {

    getEquipmentsPerReport(idReport: number): Promise<Array<Equipment>> {
        return fetch(
            `${ENV.apiProyects}/equipo?id_reporte=${idReport}`,{
                method: 'GET',
                credentials: "include"
         })
        .then(res => res.json())
    }

    addEquipment(equipment: Equipment): Promise<Equipment> {
        return fetch(
            `${ENV.apiProyects}/equipo`,{
                method: 'POST',
                credentials: "include",
                body: JSON.stringify(equipment)
         })
        .then(res => res.json())
    }

    deleteEquipment(idEquipment: number) {
        return fetch(
         `${ENV.apiProyects}/equipo?id_equipo=${idEquipment}`, {
                method: 'DELETE',
                credentials: "include"
         })
        .then(res => res.json())
    }
}