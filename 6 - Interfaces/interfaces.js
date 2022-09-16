/*
    INTERFACES
    É uma estrutura que define um contrato para a declaração de classes em uma aplicação
*/
const pessoa = {
    nome: 'Igor',
    idade: 24,
    saudarH(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
// pessoa.saudar('Igor')
/*
    Interfaces em Classes
*/
class Cliente {
    constructor() {
        this.nome = 'Igor';
        this.idade = 24;
    }
    saudarH(sobrenome) {
        console.log(`${sobrenome}`);
    }
}
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
class RealA {
    A() {
    }
}
class RealAB {
    A() { }
    B() { }
}
const funcao1 = ({}) => { };
funcao1(new RealA);
//Repare o jogo de heranças onde usamos a palavra extends para tal.
//Perceba também que, na funcao1, que recebe um objeto do tipo A, podemos passar a class RealA que
//herda (implements) a interface A
/*
    Iterface para estender objects
*/
console.log(Object);
Object.prototype.metodoAdicionado = () => {
    console.log('Igor adicionou');
};
//Perceba que Object é uma interface. Nela, adicionamos um método e a partir daí pudemos adicioná-lo
//à cadeia de prototipos e assim chamá-lo
