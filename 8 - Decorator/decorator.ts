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

const decoratorEletrodomesticos=(target: Function)=>console.log(target); //Função usada como decorator que imprime o parâmetro recebido. Esse parâmetro é a classe que foi decorada

@decoratorEletrodomesticos //Usando decorator na classe, associando a classe à função decorator
class Eletrodomesticos {
    constructor(public tipo: string){
        this.tipo = 'Eletrico'
    }

    falaTipo(){
        console.log(this.tipo)
    }
}




//--------------------------------------------------------------------------------------------------
/*
    TESTES
*/
function log(prefix: string){
    return <Function>(target: Function)=>{
        console.log(`${prefix} ${target}`);
        console.log(target);
    }
}

@log('Prefixo')
class Foo{}





function handleDecorator(target: any, key: string) {
    console.log(target, key);
}


class TestandoDecorators {
    @handleDecorator
    public mainInfo: string;
    constructor(mainInfo: string){
        this.mainInfo = 'MaiInfo'
    }
}




function analyze(target: any, key: string) {
    console.log(target, key);
  }
  
  class Task {
    @analyze
    public title: string;
  
    constructor(title: string) {
      this.title = title;
    }
  }