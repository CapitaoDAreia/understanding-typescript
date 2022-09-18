/*
    DECORATORS

    Ainda não entendi bem o que são e nem para que servem os decorators.
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

