export class Habilidad {
    id?: number;
    nombre:string;
    porcentaje:number;
habilidad: string;


    constructor(
        nombre: string, 
        porcentaje: number) {
       
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}
