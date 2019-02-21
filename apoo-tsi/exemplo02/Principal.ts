import { Alerta } from "./Alerta";

class Principal {
    private alerta: Alerta;
    
    constructor(){
        this.alerta = new Alerta("Olá");
    }

    public atualizar(mensagem: string){
        this.alerta.mensagem = mensagem; // atualização permitida somente devido à definição dos métodos 'get' e 'set'
    }

    public executar(){
        this.alerta.aviso();
    }
}

// instanciação do objeto do tipo 'Principa;'
let programa = new Principal();
programa.executar();
programa.atualizar('Hello');
programa.executar();