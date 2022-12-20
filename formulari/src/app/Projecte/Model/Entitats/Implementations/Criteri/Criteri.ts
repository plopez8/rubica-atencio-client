import { Valoracio } from "../Valoracio/Valoracio";
import { ICriteri } from "../../Interfaces/Criteri/ICriteri";

export class Criteri implements ICriteri {
    titol: String;
    valoracions: Array<Valoracio> = new Array<Valoracio>;

    constructor(titol: String){
        this.titol = titol;
    }
}