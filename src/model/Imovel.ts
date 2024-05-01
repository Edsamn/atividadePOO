abstract class Imovel {
  endereco: string;
  preco: number;

  constructor(endereco: string, preco: number) {
    this.endereco = endereco;
    this.preco = preco;
  }

  abstract imprimirValor(): void;
}

export default Imovel;
