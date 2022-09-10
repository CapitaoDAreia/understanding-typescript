//Iniciando section 5
/*
    CLASSES

*/
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(25);
console.log(aniversario.dia + "/0" + aniversario.mes + "/" + aniversario.ano);
//De forma mais simples, temos a mesma coisa:
var DataSimplificada = /** @class */ (function () {
    function DataSimplificada(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataSimplificada;
}());
/*
    DESAFIO PRODUTO
    -Atributos: nome, preco e desconto
    -Criar construtor
    -Desconto é opcional
    -Criar dois produtos passando dois e três parâmetros
*/
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resumo = function () {
        return "".concat(this.nome, " custa R$").concat(this.preco, " e possui ").concat(this.desconto, " de desconto, sendo o seu pre\u00E7o com desconto R$").concat(this.precoComDesconto(), ".");
    };
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    return Produto;
}());
var p1 = new Produto('KitKat', 2.00, 0.1);
var p2 = new Produto('Banana', 0.99);
console.log(p1.resumo());
