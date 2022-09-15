/*
    NAMESPACE

    É uma funcionalidade do TS utilizada para agrupar funções, variáveis, interfaces, classes e etc
    que possuem algum tipo de correlação.
    Para usar os componentes de um namespace fora dele é necessário realizar a exportação.
*/

namespace NamesPace1 {
    export function Funcao1(): string{
        return `Função 1 da namespace1 invocada.`
    }
    function Funcao2(): string{
        return `Função 2 da namespace1 invocada.`
    }
    export function Funcao3():string{
        return `Função 3 da namespace1:${Funcao2()}`
    }
};

console.log(NamesPace1.Funcao1());
console.log(NamesPace1.Funcao3());