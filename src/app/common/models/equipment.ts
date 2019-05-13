
export class Equipment {
    id_equipo?: number;
    id_reporte?: number;
    nombre_de_equipo: string;
    tipo_de_equipo:   string;

    constructor(
        nombre_de_equipo: string,
        tipo_de_equipo: string,
        id_reporte: number
    ) {
        this.nombre_de_equipo = nombre_de_equipo;
        this.tipo_de_equipo = tipo_de_equipo;
        this.id_reporte = id_reporte
    }

    static getEquipmentPath(equipment: Equipment) {
        return `equipos/${equipment.id_equipo}-${equipment.nombre_de_equipo}`;
    }
}