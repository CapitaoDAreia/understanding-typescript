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
var NamesPace1;
(function (NamesPace1) {
    function Funcao2() {
        return `Função 2 da namespace1 invocada.`;
    }
    function Funcao3() {
        return `Função 3 da namespace1:${Funcao2()}`;
    }
    NamesPace1.Funcao3 = Funcao3;
    let NamesPace1Inner;
    (function (NamesPace1Inner) {
        function Funcao1DoInner() {
            return `Função 1 da namespace1inner`;
        }
        NamesPace1Inner.Funcao1DoInner = Funcao1DoInner;
    })(NamesPace1Inner = NamesPace1.NamesPace1Inner || (NamesPace1.NamesPace1Inner = {}));
})(NamesPace1 || (NamesPace1 = {}));
;
console.log(NamesPace1.Funcao1());
console.log(NamesPace1.Funcao3());
console.log(NamesPace1.NamesPace1Inner.Funcao1DoInner());
//
