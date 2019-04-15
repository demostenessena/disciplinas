import { Veiculo } from "./Veiculo";

export abstract class CalculoValor {
    public abstract calcular(periodo : number, veiculo : Veiculo) : number;
}