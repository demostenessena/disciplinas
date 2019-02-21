import { Tartaruga } from "./Tartaruga";
import { Coelho } from "./Coelho";
import { Animal } from "./Animal";

class Principal {
    public static main(opcao : string){
        let animal : Animal;

        if(opcao == 't'){
            animal = new Tartaruga('Tarta');
        }else {
            animal = new Coelho('Coe');
        }

        animal.correr(100); // Ocorrência do Polimorfismo.
    }
}

// execuçao do programa
Principal.main('t');
Principal.main('c');