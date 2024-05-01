"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imovel_1 = __importDefault(require("./Imovel"));
class Novo extends Imovel_1.default {
    constructor(valorAdicionalNovo) {
        super("Rua João", 200000);
        this.valorAdicionalNovo = valorAdicionalNovo;
    }
    imprimirValor() {
        console.log(this.valorAdicionalNovo + this.preco);
    }
    imprimirAdicional() {
        console.log(this.valorAdicionalNovo);
    }
}
exports.default = Novo;
