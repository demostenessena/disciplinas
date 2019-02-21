import { Alerta } from "./Alerta";

class Principal {
    private alerta: Alerta;
    
    constructor(){
        this.alerta = new Alerta("Olá");
    }

    public executar(){
        this.alerta.aviso();
    }
}

// instanciação do objeto do tipo 'Principa;'
let programa = new Principal();
programa.executar();