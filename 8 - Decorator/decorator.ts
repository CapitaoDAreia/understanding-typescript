/*
    DECORATORS

    São espécies de funções que ajudam a "decorar"/modificar o comportamento de classes, métodos e propriedades.

*/

/*
    PRIMEIRO EXEMPLO - DECORATOR DE CLASSES SIMPLES
*/
@recebeClasseELoga
class MinhaClasse{
    constructor(public nome: string = 'Minha Classe'){
        // console.log(`Construindo ${this.nome}...`) 
    }
}
const umaClasse = new MinhaClasse()

function recebeClasseELoga(target: Function){
    // console.log(target) 
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

@decoratorCondicional(true)
class MinhaSegundaClasse{
    constructor(public nome: string){
        // console.log(`Construindo a classe ${this.nome}`)
        this.nome = 'Sou a segunda classe.'
    }
}

function decoratorVazio(_: Function):void{}

function decoratorDeClasse(target: Function){
    // console.log(`Classe recebida para decorar: ${target}`)
}

function decoratorCondicional(validacao: boolean){
    return validacao ? decoratorDeClasse : decoratorVazio
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
@decoratorModificadorDeConstrutor //Assinando/decorando a terceira classe
class MinhaTerceiraClasse{
    constructor(){
        // console.log(`Construindo minha terceira classe...`)
    }
}
//Um tipo construtor que incide sobre uma função construtora genérica. Essa, por sua vez, atravez da expressão em questão (...args: any[]) recebe qualquer tipo de parâmetro.
type constructor = {
    new(...args: any[])
}

function decoratorModificadorDeConstrutor(target: constructor){ //target do tipo constructor
    // console.log('Incidindo decorator sobre construtor da terceira classe...')
    return class extends target{ //retorna uma classe anônima que estende a classe decorada
        constructor(...args: any[]){
            // console.log('Invocando métodos da terceira classe...')
            super(...args)
            // console.log('Adicionando propriedades além da terceira classe...')
            //Aqui você pode adicionar mais à classe em questão
            //Aqui você também pode assinar com outros tipos de decorators
            
        }
    }
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

/*
    EXEMPLO DE DECORATOR UTILIZANDO PROTOTYPES
*/

function BaseEntity(target: Function): void{
    // target extends NewUser{}
    target.prototype.id = '123'
    target.prototype.seiLaOque = 'Sei lá o que'
}

@BaseEntity
class NewUser{
    constructor(public name: string = 'New User Constructor'){
        console.log(`Inicializando a ${this.name}`)
    }
}

// console.log(new NewUser)


//----------------------------------------------------------------------------------------------------

/*
    DECORATOR DE MÉTODO
*/


class ContaCorrente{
    @decoratorPrevineValorNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo;
    }
    
    sacar(value: number): boolean{
        this.saldo -= value
        return true
    }
    
    @decoratorCongeladorDeMetodo
    getSaldo(): number{
        return this.saldo
    }
}

const conta1 = new ContaCorrente(100)

conta1.getSaldo = function(){
    return this['saldo'] + 2000 //essa sintaxe permite que o compilador aceite modificação em atributo private
}

// console.log(conta1.getSaldo());
// console.log(conta1.sacar(2000));


function decoratorCongeladorDeMetodo(
    target: any, 
    methodName: string, 
    descriptor: PropertyDescriptor
    ){
        descriptor.writable = false;
        // console.log("Recebido pelo decorator: "+target, methodName, descriptor)
}

/*
    O QUE FOI FEITO:

    Para ilustrar uma situação, declaramos uma classe ContaCorrente que possui um atributo e dois métodos e a instanciamos

    Em seguida, alteramos um dos métodos dessa classe utilizando uma sintaxe interessante onde o compilador permite a alteração de propriedades privadas.

    Criamos um decorator de métodos, este recebe o target, nome do método e descriptor.
    Esse último parâmetro é um prototype dos Objects em JS, que nos permite manipular o comportamento
    descritivo de propriedades que derivam de OBJ. Através dele, alteramos a característica writable para FALSE, o que impede que a propriedade seja modificada.

    Por último, decoramos o método em questão, protegendo-o de modificações.
*/


//-----------------------------------------------------------------------------------------------------


/*
    DECORATOR DE ATRIBUTO
*/

function decoratorPrevineValorNegativo(target: any, nomeProp: string){
    // console.log("Atributo: "+target[nomeProp])
    delete target[nomeProp]
    Object.defineProperty(target, nomeProp, {
        get: function(): any {
            return target["_"+nomeProp]
        },
        set: function(value: any): void{
            if(value < 0){
                throw new Error('Você não tem tanta grana assim, querido.')
            }else{
                target["_"+nomeProp] = value;
            }
        }
    })
    
}

/*
    O QUE FOI FEITO:

    Aproveitamos a classe do exemplo anterior e definimos para ela um novo decorator, dessa vez incidindo sobre um atributo.

    Esse decorator de atributo recebe o alvo e o nome do atributo que estamos recebendo.
    O que fizemos foi, primeiro, deletar dentro da classe esse nome de atributo, depois
    definimos um novo atributo utilizando o método de objetos JS defineProperty, herdado via prototype 
    por todos os OBJ

    Criamos o novo atributo com o nome do atributo deletado e para ele definimos um get e set, onde ao tentar mudar o valor dessa propriedade, uma interceptação e uma verificação acontecem.
*/


//----------------------------------------------------------------------------------------------------

/*
    DECORATOR DE PARÂMETRO
*/

class MinhaQuartaClasse{
    public nome: string;
    constructor(nome: string){
        this.nome = nome;
    }

    falaNome(@decoratorDeParametro value: string, @decoratorDeParametro other: string){
        return `${this.nome} diz: ${value + other}`
    }
}

function decoratorDeParametro(target: any, nomeMetodo: string, parametro: any){
    // console.log(parametro)
    // console.log(target)
    // console.log(nomeMetodo)
}

/*
    O QUE FOI FEITO: 

    Com esse tipo de decorator, capturamos o parâmetro desejado dentro do método desejado.
    Não consegui identificar casos de uso ou empregos para esse tipo de decorator, seguirei estudando.
*/