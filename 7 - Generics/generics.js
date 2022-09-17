/*
    GENERICS

    É um recurso do Typescript que nos permite atribuir tipos em tempo de uso, ou seja, determinar que
    ua função ou variável possui um tipo genérico, que pode ser qualquer um, e no momento que essa função
    ou variável receber algum valor, o tipo desse valor é determinado para essa função ou variável.
*/
//Exemplo 1 - com e sem generics
function echo(objeto) {
    return objeto;
}
console.log(echo('Olá').length);
console.log(echo(12).length);
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Olá').length);
console.log(echoMelhorado('Olá').length);
// console.log(echoMelhorado(124).length);
/*
    Repare que na primeira função, como o parâmetro é any, ao escrever o código não se sabe ao certo como tratar esse parâmetro, não se sabe
    o que é esse parâmetro até que o código seja rodado.

    No segundo caso, como usamos generics, no momento em que passamos o parâmetro para a função o compilador assume que o tipo de dado tratado
    será justamente aquele que passamos e começa a tratar imediatamente, sem que seja necessário rodar o código. Assim, o compilador nos impede
    de usar um método de strings em um tipo number.

    No tocante ao tipo, é possível que ele seja capturado tanto por inferência, ou seja automaticamente, quanto por um generic específico <tipo>.

*/
//--------------------------------------------------------------------------------------------------------------------------------------
/*
    GENERICS COM ARRAYS - Como usar generics em arrays?
*/
//Array - função associada ao tipo genérico que recebe um array de tipos genéricos
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]); //Passando numbers no array e pegando o tipo por inferência
imprimir([3, 2, 1]); //Passando numbers no array e determinando o tipo antes
imprimir(['Igor', 'Daniel', 'da Silva']); //Passando strings no array e determinando tipo antes
//Determinando o tipo dos itens no array antes de recebê-los no array
imprimir([
    { nome: 'Igor', idade: 24 },
    { nome: 'Daniel', idade: 24 }
]);
imprimir([
    { nome: 'Igor2', idade: 24 },
    { nome: 'Daniel2', idade: 24 }
]);
//O tipo echo é uma função associada a um tipo genérico que recebe um parâmetro de tipo genérico e retorna um dado de tipo genérico
const chamarEcho = echoMelhorado;
//Declarada uma variável chamarEcho que é do tipo Echo e recebe a função echoMelhorado
// console.log(chamarEcho<string>('Alguma coisa'))
//--------------------------------------------------------------------------------------------------------------------------------------
/*
    CLASSES COM GENERICS - Como usar generics em classes?

*/
//Exemplo 1 - classe genérica comum que poderia gerar erro
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria({}, 'Olá').executar());
/*
    Veja que o método executar simplesmente soma um objeto e uma string, sem nenhum tipo de erro, pois no ato da confecção da classe os operandos
    não possuíam nenhum tipo, sendo os mesmos any.
*/
//Exemplo 2 - classe tipada com generics - a classe é abstrata pois não sabemos quais são os tipos que vamos receber para saber se podemos somar e implementaremos ela depois
class OperacaoBinaria2 {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria2 {
    executar() {
        return this.operando1 + this.operando2;
    }
}
/*
    Perceba que a classe SomaBinaria é montada apartir da OperacaoBinaria2, herda os seus itens e nela implementamos o método executar.
    Dessa vez o método executar funciona bem pois sabemos que se trata de somar numbers. No entanto, se o tipo fosse algum que não pode ser
    aplicado ao operador +, teríamos um erro.
*/
//--------------------------------------------------------------------------------------------------------------------------------------
/*
    DESAFIO - Classe Fila
    
    - Criar classe chamada fila com generics
        - Atributo de nome fila (array)
        - Métodos: entrar, próximo, imprimir
*/
class Fila {
    constructor(fila) {
        this.fila = fila;
    }
}
class Myfila extends Fila {
    entrar(someData) {
        this.fila.push(someData);
        return this.fila;
    }
    proximo() {
        return this.fila.slice(0, 1);
    }
    imprimir() {
        return this.fila;
    }
}
const umaFila = new Myfila(['Elemento1', 'Elemento2']);
console.log(umaFila.entrar('Elemento3'));
console.log(umaFila.entrar('Elemento4'));
console.log(umaFila.proximo());
console.log(umaFila.imprimir());
