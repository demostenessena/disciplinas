import {Gabinete} from "./Gabinete";
import {Monitor} from "./Monitor";
import {Mouse} from "./Mouse";
import {Teclado} from "./Teclado";

class Computador {
    private gabinete : Gabinete;
    private monitor : Monitor;
    private teclado : Teclado;
    private mouse : Mouse;

    constructor(){
        this.gabinete = new Gabinete();
        this.monitor = new Monitor();
        this.mouse = new Mouse();
        this.teclado = new Teclado();
    }

    ligar(){
        console.log("...Ligando o computador!");
        this.gabinete.ligar();
        this.monitor.ligar();
        this.mouse.ligar();
        this.teclado.ligar();

    }
}

let computador = new Computador();
computador.ligar();