export class Alerta {
    private _mensagem: string;
    constructor(mensagem : string){
        this._mensagem = mensagem;
    }

    public get mensagem(){
        return this._mensagem;
    }

    public set mensagem(mensagem : string){
        this._mensagem = mensagem;
    }

    public aviso(){
        console.log("Mensagem : " + this._mensagem);
    }
}