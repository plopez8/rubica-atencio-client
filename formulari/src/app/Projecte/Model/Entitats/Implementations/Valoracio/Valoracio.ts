import { IValoracio } from "../../Interfaces/Valoracio/IValoracio";

export class Valoracio implements IValoracio {
    nota: number;
    descripcio: string;
    seleccionat: boolean

    constructor(nota: number, descripcio: string){
        this.nota = nota;
        this.descripcio = descripcio;
        this.seleccionat = false;
    }

}