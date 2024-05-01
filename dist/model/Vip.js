"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ingresso_1 = __importDefault(require("./Ingresso"));
class Vip extends Ingresso_1.default {
    constructor(valorVip) {
        super(50);
        this.valorVip = valorVip;
    }
    imprimeValor() {
        console.log(this.valor + this.valorVip);
    }
}
exports.default = Vip;
