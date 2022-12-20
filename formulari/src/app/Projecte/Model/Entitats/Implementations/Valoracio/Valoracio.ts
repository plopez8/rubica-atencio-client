import { IValoracio } from "../../Interfaces/Valoracio/IValoracio";

export class Valoracio implements IValoracio {
    nota: number;
    descripcio: string;

    constructor(nota: number, descripcio: string){
        this.nota = nota;
        this.descripcio = descripcio;
    }
}