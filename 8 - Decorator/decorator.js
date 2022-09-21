/*
    DECORATORS

    São espécies de funções que ajudam a "decorar"/modificar o comportamento de classes, métodos e propriedades.

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
    PRIMEIRO EXEMPLO - DECORATOR DE CLASSES SIMPLES
*/
let MinhaClasse = class MinhaClasse {
    constructor(nome = 'Minha Classe') {
        this.nome = nome;
        console.log(`Construindo ${this.nome}...`);
    }
};
MinhaClasse = __decorate([
    recebeClasseELoga
], MinhaClasse);
const umaClasse = new MinhaClasse();
function recebeClasseELoga(target) {
    console.log(target);
}
/*
    O QUE FOI FEITO:
    Criamos uma classe e instanciamos a mesma e a anotamos/decoramos com uma função (decoratorMethod).
    Essa função decoratorMethod recebe a classe anotada/decorada como parâmetro.
    Logamos essa classe anotada/decorada para entender que o decoratorMethod recebe ela.
*/
/*
    SEGUNDO EXEMPLO - DECORATOR FACTORY, UMA FUNÇÃO QUE RETORNA UM DECORATOR
*/
let MinhaSegundaClasse = class MinhaSegundaClasse {
    constructor(nome) {
        this.nome = nome;
        console.log(`Construindo a classe ${this.nome}`);
        this.nome = 'Sou a segunda classe.';
    }
};
MinhaSegundaClasse = __decorate([
    decoratorCondicional(true)
], MinhaSegundaClasse);
function decoratorVazio(_) { }
function decoratorDeClasse(target) {
    console.log(`Classe recebida para decorar: ${target}`);
}
function decoratorCondicional(validacao) {
    return validacao ? decoratorDeClasse : decoratorVazio;
}
/*
    O QUE FOI FEITO:
    Criamos uma classe MinhaSegundaClasse sem instanciar
    Criamos um decoratorMethod condicional que, dado um resultado, retorna um decorator vazio ou um decorator de classe. Neste caso, retornamos um decorator vazio pois um decoratorMethod não pode retornar null ou undefined para o caso da variável validacao avaliar falso.

    **Perceba que o decoratorVazio possui um parâmetro inutilizado, note a sintaxe.

*/
/*
    TERCEIRO EXEMPLO - MODIFICANDO CONSTRUTOR USANDO DECORATOR DE CLASSES
*/
let MinhaTerceiraClasse = class MinhaTerceiraClasse {
    constructor() {
        console.log(`Construindo minha terceira classe...`);
    }
};
MinhaTerceiraClasse = __decorate([
    decoratorModificadorDeConstrutor //Assinando/decorando a terceira classe
], MinhaTerceiraClasse);
function decoratorModificadorDeConstrutor(target) {
    console.log('Incidindo decorator sobre construtor da terceira classe...');
    return class extends target {
        constructor(...args) {
            console.log('Invocando métodos da terceira classe...');
            super(...args);
            console.log('Adicionando propriedades além da terceira classe...');
            //Aqui você pode adicionar mais à classe em questão
            //Aqui você também pode assinar com outros tipos de decorators
        }
    };
}
new MinhaTerceiraClasse();
new MinhaTerceiraClasse();
new MinhaTerceiraClasse();
/*
    O QUE FOI FEITO:
    Criamos uma terceira classe e logamos algo para identificar o seu constructor.

    Após isso, criamos um tipo baseado em um construtor genérico, pois pode receber "qualquer" tipo de parâmetro em "qualquer" quantidade.

    Definimos um decoratorMethod que recebe um parâmetro com a tipagem anteriormente criada, esse parâmetro é a nossa classe decorada.

    Ao compilarmos o código, o decorator é inicializado e incide sobre a classe decorada retornando uma classe anônima que  estende a classe decorada. Esse decorator só é inicializado de fato uma vez, que é quando a classe assinada é inicializada.

    Sempre que a classe decorada for instanciada, a classe anônima será retornada gerando uma herança da classe decorada estendendo-a.
*/
