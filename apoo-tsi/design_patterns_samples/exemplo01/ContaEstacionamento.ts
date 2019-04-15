import { Veiculo } from './Veiculo';
import { Passeio } from './Passeio';
import { Carga } from './Carga';
import { Tempo } from './Tempo';

export class ContaEstacionamento {
    private veiculo : Veiculo;
    private inicio: number;
    private fim : number;

    public valorConta() : number {
        let currentDate = new Date();
        let atual  = (this.fim==0) ? currentDate.getMilliseconds() : this.fim;
        let periodo = (this.inicio - atual);

        if(this.veiculo instanceof Passeio){
            if(periodo < 12 * Tempo.HORA){
                return 2.0 * Math.ceil(periodo / Tempo.HORA);
            }else if (periodo > 12 * Tempo.HORA && periodo < 15 * Tempo.DIA){
                return 26.0 * Math.ceil(periodo / Tempo.DIA);
            }else {
                return 300.0 * Math.ceil(periodo / Tempo.MES);
            }
        }else if(this.veiculo instanceof Carga){
            // outras regras para veículos de carga
        }else {
            // outras regras para outros tipos de veículos
        }
    }
}