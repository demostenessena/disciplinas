import { Animal } from "./Animal";

export class Coelho extends Animal{
    public correr(distancia : number){
        console.log(this.nome + " correu " + distancia + " metros rapidamente.");
    }
}