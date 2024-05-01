"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imovel_1 = __importDefault(require("./Imovel"));
class Velho extends Imovel_1.default {
    constructor(valorDescontoVelho) {
        super("Rua São Tomé", 90000);
        this.valorDescontoVelho = valorDescontoVelho;
    }
    imprimirValor() {
        console.log(this.preco - this.valorDescontoVelho);
    }
    imprimirDesconto() {
        console.log(this.valorDescontoVelho);
    }
}
exports.default = Velho;
