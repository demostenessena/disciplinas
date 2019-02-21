export abstract class Animal {
    private _nome : string;

    constructor(nome : string){
        this._nome = nome;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome : string){
        this._nome = nome;
    }

    public abstract correr(distancia : number) : any;
}