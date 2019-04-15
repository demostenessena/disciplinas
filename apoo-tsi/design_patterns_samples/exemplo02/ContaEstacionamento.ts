import { Veiculo } from './Veiculo';
import { Passeio } from './Passeio';
import { Carga } from './Carga';
import { Tempo } from './Tempo';
import { CalculoValor } from './CalculoValor';

export class ContaEstacionamento {
    private calculo : CalculoValor;

    private veiculo : Veiculo;
    private inicio: number;
    private fim : number;

    public valorConta() : number {
        return this.calculo.calcular(this.fim - this.inicio, this.veiculo);
    }

    public setCalculo(calculo : CalculoValor) : void {
        this.calculo = calculo;
    }
 }