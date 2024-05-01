"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = __importDefault(require("./model/Cachorro"));
const Camarote_1 = __importDefault(require("./model/Camarote"));
const Cavalo_1 = __importDefault(require("./model/Cavalo"));
const Gato_1 = __importDefault(require("./model/Gato"));
const Normal_1 = __importDefault(require("./model/Normal"));
const Novo_1 = __importDefault(require("./model/Novo"));
const Velho_1 = __importDefault(require("./model/Velho"));
const Vip_1 = __importDefault(require("./model/Vip"));
// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
const ingressoNormal = new Normal_1.default();
ingressoNormal.imprimeValor();
const ingressoVip = new Vip_1.default(100);
ingressoVip.imprimeValor();
const ingressoCamarote = new Camarote_1.default(300);
ingressoCamarote.imprimeValor();
// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
const imovelNovo = new Novo_1.default(50000);
imovelNovo.imprimirValor();
imovelNovo.imprimirAdicional();
const imovelVelho = new Velho_1.default(20000);
imovelVelho.imprimirValor();
imovelVelho.imprimirDesconto();
// 3. Dado o seguinte diagrama:
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
const cachorro = new Cachorro_1.default();
cachorro.andar();
cachorro.comer();
cachorro.latir();
const gato = new Gato_1.default();
gato.andar();
gato.comer();
gato.miar();
const cavalo = new Cavalo_1.default();
cavalo.andar();
cavalo.comer();
cavalo.relinchar();
