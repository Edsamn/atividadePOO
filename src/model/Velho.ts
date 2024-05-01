import Imovel from "./Imovel";

class Velho extends Imovel {
  valorDescontoVelho: number;

  constructor(valorDescontoVelho: number) {
    super("Rua São Tomé", 90000);
    this.valorDescontoVelho = valorDescontoVelho;
  }

  imprimirValor(): void {
    console.log(this.preco - this.valorDescontoVelho);
  }

  imprimirDesconto() {
    console.log(this.valorDescontoVelho);
  }
}

export default Velho;
