
export class File {

    id?:        number;
    ubicacion?: string;
    nombre:     string;
    extension:  string;
    tipoMIME:   string;
    contenido?: string;
    comentario?: string='';
    fechaDeInsercion?: string;

    constructor (descriptor, contenidoB64: string) {
        var descripción = descriptor.name.split('.'),
            contenido   = contenidoB64.split(':')[1].split(',');
        
        this.nombre    = descripción[0];
        this.extension = descripción[1];
        this.tipoMIME  = contenido[0];
        this.contenido = contenido[1];
    }
}