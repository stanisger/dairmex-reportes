
export class Report {
    id_reporte?:       number;
    nombre_de_tienda:  string;
    ciudad:            string;
    descriptivo:       string="";
    estatus:           string="en proceso";
    __ingreso?:        string;

    constructor(
      nombre_de_tienda: string,
      ciudad: string,
      descriptivo: string = ''
    ) {
       this.nombre_de_tienda=nombre_de_tienda;
       this.ciudad=ciudad;
       this.descriptivo=descriptivo;
    }

    static getProjectPath(report: Report) {
        return `/reportes/${report.id_reporte}-${report.nombre_de_tienda}`;
    }
}
