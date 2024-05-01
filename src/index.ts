import Cachorro from "./model/Cachorro";
import Camarote from "./model/Camarote";
import Cavalo from "./model/Cavalo";
import Gato from "./model/Gato";
import Normal from "./model/Normal";
import Novo from "./model/Novo";
import Velho from "./model/Velho";
import Vip from "./model/Vip";

// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
const ingressoNormal = new Normal();
ingressoNormal.imprimeValor();
const ingressoVip = new Vip(100);
ingressoVip.imprimeValor();
const ingressoCamarote = new Camarote(300);
ingressoCamarote.imprimeValor();

// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
const imovelNovo = new Novo(50000);
imovelNovo.imprimirValor();
imovelNovo.imprimirAdicional();
const imovelVelho = new Velho(20000);
imovelVelho.imprimirValor();
imovelVelho.imprimirDesconto();

// 3. Dado o seguinte diagrama:
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
const cachorro = new Cachorro();
cachorro.andar();
cachorro.comer();
cachorro.latir();
const gato = new Gato();
gato.andar();
gato.comer();
gato.miar();
const cavalo = new Cavalo();
cavalo.andar();
cavalo.comer();
cavalo.relinchar();
