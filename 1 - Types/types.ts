/*
    TYPESCRIPT - TIPOS
    De acordo com a documentação oficial, o Typescript oferece tudo o que o JavaScript oferece com um
    adicional de peso acima de tudo, o sistema de tipagem TypesScript. Por exemplo, o JavaScript oferece
    tipos primitivos de linguagem como uma string e um number, mas não checa se você atribui constantemente
    e de forma fiel valores de mesmo tipo, o TypeScript sim!

    O principal benefício do Typescript é que ele pode prevenir comportamentos inesperados no seu código, 
    reduzindo as chances de bug.
*/

//String
let nome = 'Igor';
// nome = 21
console.log(nome)

//Numbers
let idade = 27;
// idade = 'Igor'
console.log(idade)

//Boolean
let possuiHobbies = false;
// possuiHobbies = 12;
console.log(possuiHobbies)

//any - qualquer variável que receba o valor explicitamente ou que seja declarada sem tipo e valor
let variavel;
let var2: any = 1;
var2 = '1';
console.log(variavel+", "+ var2)

//Array
let hobbies: string[] = ['Cozinhar', 'Praticar Esportes'];
hobbies.push('Igor')
console.log(hobbies)


//Tuplas - É um tipo de array onde o número exato de elementos é definido previamente
let endereco: [string, number] = ["Av Principal", 99]
console.log(endereco)


//Enum - Enumeração | Estrutura com valores pré definidos, por exemplo os dias da semana.
enum Cores {
    cinza,  //0
    verde, //1
    azul  //2
}
const minhaCor: Cores = Cores.verde;


//Funções
function falaNome():string{ //retorna uma string
    return nome
}

function dizOi():void{ //não retorna nada | void = vazio
    console.log('oi')
}

function multiplicar(X: number, Y:number):number{ //recebe e retorna numbers
    return X*Y
}

//Tipo função
let calculo: (x: number, y:number) => number; //Calculo recebe uma função que recebe numbers e retorna numbers
calculo = multiplicar;
// calculo = []
console.log(calculo(2, 4))


//Objetos
let usuario:{nome:string, idade:number} = { //o obj usuário recebe nome do tipo string e idade do tipo number
    nome: 'Igor',
    idade: 23
}
usuario = {
    nome: 'Silva',
    idade: 24
}


/*
    DESAFIO
    Criar um obj funcionario com:
        Array de strings com os nomes dos supervisores
        Função de bater ponto que recebe a hora(número)
            e retorna uma string
            Ponto normal <=8
            Fora do horário >8
*/

let objDesafio: {
    nomeSupervisores: string[],
    batePonto: (hora: number) => string
};

objDesafio = {
    nomeSupervisores: ['Igor', 'Daniel', 'Igor Silva'],
    batePonto: hora =>{
        return hora<=8?'Ponto normal':'Fora do horário';
    }
};
console.log(objDesafio.batePonto(10));