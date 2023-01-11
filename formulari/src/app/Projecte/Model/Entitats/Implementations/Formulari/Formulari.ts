import { Criteri } from "../Criteri/Criteri";
import { IFormulari } from "../../Interfaces/Formulari/IFormulari";

export class Formulari implements IFormulari {
    criteris: Array<Criteri>;

    constructor(criteris: Array<Criteri>){
        this.criteris = criteris;
    }
}