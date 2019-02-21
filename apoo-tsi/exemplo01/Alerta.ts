export class Alerta {
    private mensagem: string;
    constructor(mensagem : string){
        this.mensagem = mensagem;
    }

    public aviso(){
        console.log("Mensagem : " + this.mensagem);
    }
}