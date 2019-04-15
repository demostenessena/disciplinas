
export class Tempo {
    private static _HORA: number;
    private static _DIA : number;
    private static _MES : number;

    constructor (){
        Tempo._HORA = 60 * 60 * 1000;
        Tempo._DIA = 24 * Tempo._HORA;
        Tempo._MES = 30 * Tempo._DIA; // simplificação, pois é necessário verificar a quantidade dias do mês atual.
    }

    public static get HORA(): number {
        return Tempo._HORA;
    }

    public static get DIA(): number {
        return Tempo._DIA;
    }

    public static get MES(): number {
        return Tempo._MES;
    }


}