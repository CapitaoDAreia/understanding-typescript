/*
    NAMESPACE

    É uma funcionalidade do TS utilizada para agrupar funções, variáveis, interfaces, classes e etc
    que possuem algum tipo de correlação.
    Para usar os componentes de um namespace fora dele é necessário realizar a exportação.
*/



/*
    Essa é uma forma de referenciar outra parte do NamesPace1 que está em outro arquivo 
    para que o compilador consiga compreender a separação do namespace em arquivos diferentes
*/
///<reference path="namespace2.ts"/> 

namespace NamesPace1 {
    function Funcao2(): string{
        return `Função 2 da namespace1 invocada.`
    }
    export function Funcao3():string{
        return `Função 3 da namespace1:${Funcao2()}`
    }

    export namespace NamesPace1Inner{
        export function Funcao1DoInner():string{
            return `Função 1 da namespace1inner`
        }
    }
};

console.log(NamesPace1.Funcao1());
console.log(NamesPace1.Funcao3());
console.log(NamesPace1.NamesPace1Inner.Funcao1DoInner())

//