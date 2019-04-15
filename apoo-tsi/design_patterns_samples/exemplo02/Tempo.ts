
export class Tempo {
    static readonly HORA = 60 * 60 * 1000;
    static readonly DIA = 24 * Tempo.HORA;
    static readonly MES = 30 * Tempo.DIA; // simplificação, pois é necessário verificar a quantidade dias do mês atual.
}