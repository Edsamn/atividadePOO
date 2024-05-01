import Ingresso from "./Ingresso";

class Vip extends Ingresso {
  valorVip: number;

  constructor(valorVip: number) {
    super(50);
    this.valorVip = valorVip;
  }

  imprimeValor(): void {
    console.log(this.valor + this.valorVip);
  }
}

export default Vip;
