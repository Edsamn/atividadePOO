import Imovel from "./Imovel";

class Novo extends Imovel {
  valorAdicionalNovo: number;

  constructor(valorAdicionalNovo: number) {
    super("Rua João", 200000);
    this.valorAdicionalNovo = valorAdicionalNovo;
  }

  imprimirValor(): void {
    console.log(this.valorAdicionalNovo + this.preco);
  }

  imprimirAdicional() {
    console.log(this.valorAdicionalNovo);
  }
}

export default Novo;
