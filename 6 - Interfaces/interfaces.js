/*
    INTERFACES
    É uma estrutura que define um contrato para a declaração de classes em uma aplicação
*/
const pessoa = {
    nome: 'Igor',
    idade: 24,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
// pessoa.saudar('Igor')
