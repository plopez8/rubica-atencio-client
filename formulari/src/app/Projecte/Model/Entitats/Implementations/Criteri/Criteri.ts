import { Valoracio } from "../Valoracio/Valoracio";
import { ICriteri } from "../../Interfaces/Criteri/ICriteri";

export class Criteri implements ICriteri {
    titol: String;
    valoracions: Array<Valoracio>;

    constructor(titol: String, valoracions: Array<Valoracio>){
        this.titol = titol;
        this.valoracions = valoracions;
    }
}