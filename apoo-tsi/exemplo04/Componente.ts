export class Componente {
    constructor(private id : string){

    }
    
    public async ligar(){
        console.log(`...ligando ${this.id}!`);
        await delay(3000);
        console.log(`${this.id} ligado!`);
    }
}

async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}