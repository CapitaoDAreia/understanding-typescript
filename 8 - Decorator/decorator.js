/*
    DECORATORS

    Estou começando a entender o que são decorators.
    São espécies de funções que ajudam a "decorar"/modificar o comportamento de classes, métodos e propriedades.

    A função que constrói o MethodDecorator leva três argumentos padrões:
        -target: método/função/classe a ser decorado
        -key: o nome do método/função/classe que está sendo decorado
        -value: o descritor da propriedade/função/classe dada se existir no objeto, ou será undefined caso não exista. O descritor da propriedade/função/classe é obtido baseado na função
        Object.getOwnPropertyDescriptor()
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
//--------------------------------------------------------------------------------------------------
/*
    TESTES
*/
function log(prefix) {
    return (target) => {
        console.log(`${prefix} ${target}`);
        console.log(target);
    };
}
let Foo = class Foo {
};
Foo = __decorate([
    log('Prefixo')
], Foo);
function handleDecorator(target, key) {
    console.log(target, key);
}
class TestandoDecorators {
    constructor(mainInfo) {
        this.mainInfo = 'MaiInfo';
    }
}
__decorate([
    handleDecorator
], TestandoDecorators.prototype, "mainInfo", void 0);
function analyze(target, key) {
    console.log(target, key);
}
class Task {
    constructor(title) {
        this.title = title;
    }
}
__decorate([
    analyze
], Task.prototype, "title", void 0);
