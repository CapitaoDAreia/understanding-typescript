/*
    LET, CONST, VAR
    Let - não sofre hoisting e pertence ao escopo no qual foi declarada.
    Var - é de escopo global, somente sendo exclusiva se estiver dentro de uma função.
    Const - Não é possível realizar atribuição em uma variável const, também possui escopo de bloco assim como let.
*/
// console.log(seraquepode)
let seraquepode = "?"
let estaFrio = true;
if(estaFrio){
    var acao = "Colocar casado!"
}
// console.log(acao)


/*
    ARROW FUNCTION
    Sintaxe - Exemplo abaixo. Pode possuir retorno implícito e se o parâmetro for tipado é necessário o
    This - 
*/
const falarCom = (pessoa: string):string =>{
    // console.log(this)
    return "Eaê, "+pessoa
}
const falarCom2 = (pessoa:string) => "Eaê, "+pessoa

//This - Percea que em uma função com sintaxe padrão o this pode ser alterado com o método bind.
//       Por padrão, uma função recebe como this o mesmo this do contexto em que foi declarada.  
function exemploThis1(){
    // console.log(this)
}
exemploThis1()
const exemploThis2 = exemploThis1.bind('This Alterado')
exemploThis2()

const falarCom3 = falarCom.bind("Ihaaaaaa")
falarCom('Igor')
falarCom3('Igor')
//Percea agora que em uma arrowFunction o this recebido funciona da mesma forma que na função padrão, com 
//a diferença que o this de uma arrow é imutável
 


/*
    REST & SPREAD


*/
const numbers = [1, 10, 99, -5];
const numbers2 = Math.max(...numbers);
//A função MAX recebe os elementos do array com o spread operator.

const turmaA: string[] = ['João', 'Maria', 'Igor'];
const turmaB: string[] = ['Lucas', 'Larissa', ...turmaA]
//O array turmaB recebe os elementos do array turmaA com o spread operator.


function retornaArray(...args: number[]): number[]{
    return args //<-- esse retorno é um array
}
const numeros = retornaArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//A função retorna array recebe parâmetros indefinidos por meio do operador args, todos tipados, além de possuir retorno tipado.

const tupla: [number, string, boolean] = [1, 'abc', false]
function tuplaParam1(a: number, b: string, c: boolean): void{
    console.log(`1) ${a}, ${b}, ${c}`)
}
tuplaParam1(...tupla)
//Neste exemplo, perceba que uma função que recebe parâmetros específicos está recebendo uma tupla com elementos específicos, de mesmo tipo
//esperado e na mesma ordem esperada. 

function tuplaParam2(...params: [number, string, boolean]){
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`);
}
tuplaParam2(...tupla)
//Neste exemplo as coisas acontecem de forma semelhante ao anterior, mas os parâmetros estão sendo recebidos com spread
//especificando os três tipos esperados, sendo o parâmetro recebido tratado como um array.
