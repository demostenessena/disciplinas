import { CalculoValor } from './CalculoValor';
import { Veiculo } from './Veiculo';
import { Tempo } from './Tempo';

export class CalculoDiaria implements CalculoValor {
    private valorDiaria : number;

    constructor(valorDiaria : number) {
        this.valorDiaria = valorDiaria;
    }

    public calcular(periodo: number, veiculo: Veiculo): number {
        return this.valorDiaria * Math.ceil(periodo / Tempo.HORA);
    }
}