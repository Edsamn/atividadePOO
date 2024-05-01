import Ingresso from "./Ingresso";

class Camarote extends Ingresso {
  valorCamarote: number;

  constructor(valorCamarote: number) {
    super(50);
    this.valorCamarote = valorCamarote;
  }

  imprimeValor(): void {
    console.log(this.valor + this.valorCamarote);
  }
}

export default Camarote;
