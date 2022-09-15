/*
    INTERFACES
    É uma estrutura que define um contrato para a declaração de classes em uma aplicação
*/

interface Humano{
    nome: string, //propriedade obrigatória na construção
    idade?: number, //propriedade opcional na construção
    [prop: string]:any, //propriedade de qualquer nome e tipo na construção
    saudar?(sobrenome: string):void //propriedade função, não obirgatória que recebe string e retorna nada
}

const pessoa: Humano = {
    nome: 'Igor',
    idade: 24,
    saudar(sobrenome: string){
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}
function saudarComOla(pessoa: Humano){
    console.log(`Olá, ${pessoa.nome}`)
}   
// pessoa.saudar('Igor')


