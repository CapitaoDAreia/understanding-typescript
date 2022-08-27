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
 
