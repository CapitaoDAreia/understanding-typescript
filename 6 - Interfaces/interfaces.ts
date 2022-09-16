/*
    INTERFACES
    É uma estrutura que define um contrato para a declaração de classes em uma aplicação
*/

interface HumanoI{
    nome: string, //propriedade obrigatória na construção
    idade?: number, //propriedade opcional na construção
    [prop: string]:any, //propriedade de qualquer nome e tipo na construção
    saudarH?(sobrenome: string):void //propriedade função, não obirgatória que recebe string e retorna nada
}

const pessoa: HumanoI = {
    nome: 'Igor',
    idade: 24,
    saudarH(sobrenome: string):void{
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}
function saudarComOla(pessoa: HumanoI){
    console.log(`Olá, ${pessoa.nome}`)
}   
// pessoa.saudar('Igor')


/*
    Interfaces em Classes
*/

class Cliente implements HumanoI {
    nome: string = 'Igor'
    idade: number = 24
    saudarH(sobrenome: string):void{
        console.log(`${sobrenome}`)
    }
}


/*
    Interfaces em funções
*/

interface FuncaoCalculo {
    (a: number, b:number): number
}

let potencia: FuncaoCalculo;

potencia = function(base: number, exp: number):number{
    return base ** exp;
}

/*
    Herança com interfaces
*/

interface A {
    A():void
}

interface B {
    B():void
}

interface AB extends A, B{
    C():void
}

class RealA implements A {
    A(): void {
        
    }
}


class RealAB implements A, B{
    A():void {}
    B():void {}
}


const funcao1 = ({}: A) => {};

funcao1(new RealA);


//Repare o jogo de heranças onde usamos a palavra extends para tal.
//Perceba também que, na funcao1, que recebe um objeto do tipo A, podemos passar a class RealA que
//herda (implements) a interface A




/*
    Iterface para estender objects
*/

console.log(Object)

interface Object {
    metodoAdicionado():void
}

Object.prototype.metodoAdicionado = () => {
    console.log('Igor adicionou')
}

//Perceba que Object é uma interface. Nela, adicionamos um método e a partir daí pudemos adicioná-lo
//à cadeia de prototipos e assim chamá-lo
