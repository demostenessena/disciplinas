import { Animal } from "./Animal";

export class Tartaruga extends Animal{
    public correr(distancia: number){
        console.log(this.nome + " correu " + distancia + " metros lentamente.");
    }
}