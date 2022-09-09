var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
    LET, CONST, VAR
    Let - não sofre hoisting e pertence ao escopo no qual foi declarada.
    Var - é de escopo global, somente sendo exclusiva se estiver dentro de uma função.
    Const - Não é possível realizar atribuição em uma variável const, também possui escopo de bloco assim como let.
*/
// console.log(seraquepode)
var seraquepode = "?";
var estaFrio = true;
if (estaFrio) {
    var acao = "Colocar casado!";
}
// console.log(acao)
/*
    ARROW FUNCTION
    Sintaxe - Exemplo abaixo. Pode possuir retorno implícito e se o parâmetro for tipado é necessário o
    This -
*/
var falarCom = function (pessoa) {
    // console.log(this)
    return "Eaê, " + pessoa;
};
var falarCom2 = function (pessoa) { return "Eaê, " + pessoa; };
//This - Percea que em uma função com sintaxe padrão o this pode ser alterado com o método bind.
//       Por padrão, uma função recebe como this o mesmo this do contexto em que foi declarada.  
function exemploThis1() {
    // console.log(this)
}
exemploThis1();
var exemploThis2 = exemploThis1.bind('This Alterado');
exemploThis2();
var falarCom3 = falarCom.bind("Ihaaaaaa");
falarCom('Igor');
falarCom3('Igor');
//Percea agora que em uma arrowFunction o this recebido funciona da mesma forma que na função padrão, com 
//a diferença que o this de uma arrow é imutável
/*
    REST & SPREAD


*/
var numbers = [1, 10, 99, -5];
var numbers2 = Math.max.apply(Math, numbers);
//A função MAX recebe os elementos do array com o spread operator.
var turmaA = ['João', 'Maria', 'Igor'];
var turmaB = __spreadArray(['Lucas', 'Larissa'], turmaA, true);
//O array turmaB recebe os elementos do array turmaA com o spread operator.
function retornaArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args; //<-- esse retorno é um array
}
var numeros = retornaArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//A função retorna array recebe parâmetros indefinidos por meio do operador args, todos tipados, além de possuir retorno tipado.
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) ".concat(a, ", ").concat(b, ", ").concat(c));
}
// tuplaParam1(...tupla)
//Neste exemplo, perceba que uma função que recebe parâmetros específicos está recebendo uma tupla com elementos específicos, de mesmo tipo
//esperado e na mesma ordem esperada. 
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log("2) ".concat(params[0], ", ").concat(params[1], ", ").concat(params[2]));
}
// tuplaParam2(...tupla)
//Neste exemplo as coisas acontecem de forma semelhante ao anterior, mas os parâmetros estão sendo recebidos com spread
//especificando os três tipos esperados, sendo o parâmetro recebido tratado como um array.
/*
    DESTRUCTURING


*/
var caracteristicas = ['Motor 1.8', 2020, "3 elemento", "4 elemento"];
var motor = caracteristicas[0], ano = caracteristicas[1], terceiro = caracteristicas[2];
//perceba que se declaram as variáveis enquanto se atribui os valores do array nestas.
//Se o array possui 4 elementos e eu declarar 3 variáveis, eu somente atribuo valores
//do array em 3 variáveis, e assim sucessivamente.
var item = {
    nome: 'SSD',
    preco: 200,
    caracteristicas: {
        cor: 'preto',
        modelo: 'I32',
        familia: '3RC',
        ramo: {
            linha: '32'
        }
    },
    lojas: ['Americanas', 'Magalu']
};
var n = item.nome, p = item.preco, line = item.caracteristicas.ramo.linha;
// console.log(n, p, line)
//perceba que, usando a técnica de desestruturação, acessamos as propriedades de um objeto e as atribuímos em variáveis.
/*
    RESOLUÇÃO DOS EXERCÍCIOS

*/
//1
var dobro = function (valor) { return valor * 2; };
//2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = "Pessoa"; }
    console.log("Ol\u00E1, ".concat(nome));
};
// dizerOla()
//3
var nums = [-3, 33, 38, 5];
var menor = Math.min.apply(Math, nums);
//4
var array = __spreadArray([55, 20], nums, true);
//5
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
var cientista = { primeiroNome: 'Igor', experiencia: 12 };
var nomeC = cientista.primeiroNome, xp = cientista.experiencia;
/*
    PROMISES
    Como já visto em Javascript, promises são funções que possuem retorno assíncrono, ou seja, não
    é certo se e quando o retorno virá.
    
*/
// function esperaPromise():Promise<void>{
//     return new Promise((resolve: any)=>{
//         setTimeout(()=>{
//             resolve(console.log('Foi'))
//         }, 3000)
//     });
// }
//Repare que essa função retorna uma promise, que por sua vez é um tipo de função onde temos a resolução e rejeição.
//A resolução significa que o retorno da promise é bem sucedido, já a rejeição o contrário.
fetch('https://swapi.co/api/people/1')
    .then(function (res) { return console.log(res); })["catch"](function (error) { return console.log(error); });
//Neste caso, basicamente a mesma coisa é feita. A diferença é que o retorno é implícito e utilizamos as arrows.
//O fetch faz uma requisição e obtemos seu retorno atráves do THEN e do CATCH.
