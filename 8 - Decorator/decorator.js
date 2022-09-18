/*
    DECORATORS

    Ainda não entendi bem o que são e nem para que servem os decorators.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const decoratorEletrodomesticos = (target) => console.log(target); //Função usada como decorator que imprime o parâmetro recebido. Esse parâmetro é a classe que foi decorada
let Eletrodomesticos = class Eletrodomesticos {
    constructor(tipo) {
        this.tipo = tipo;
        this.tipo = 'Eletrico';
    }
    falaTipo() {
        console.log(this.tipo);
    }
};
Eletrodomesticos = __decorate([
    decoratorEletrodomesticos //Usando decorator na classe, associando a classe à função decorator
], Eletrodomesticos);
