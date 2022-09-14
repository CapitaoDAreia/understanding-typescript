//Iniciando section 5
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// console.log(aniversario.dia+"/0"+aniversario.mes+"/"+aniversario.ano)
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
// console.log(p1.resumo())
/*
    *Modificadores de acesso
    private, public

    *getter e setter

    *static

    *protected

*/
var Homem = /** @class */ (function () {
    function Homem(nome, altura, forca) {
        this.nome = nome;
        this.altura = altura;
        this.forca = forca;
    }
    ;
    Object.defineProperty(Homem.prototype, "Caracteristicas", {
        get: function () {
            return "".concat(this.nome, ", mede ").concat(this.altura, " e tem for\u00E7a de ").concat(this.forca, ".");
        },
        enumerable: false,
        configurable: true
    });
    Homem.prototype.setNome = function (nome) {
        this.nome = nome;
        return "Nome alterado para ".concat(nome);
    };
    Homem.prototype.setAltura = function (altura) {
        this.altura = altura;
        return "Altura alterada para ".concat(altura);
    };
    Homem.prototype.getMethods = function () {
        return "Essa classe possui ".concat(this.metodoPrivado(), " e tamb\u00E9m ").concat(this.metodoProtegido());
    };
    Homem.prototype.metodoPrivado = function () {
        this.nome = 'Alterado para privado';
        return "Retorno privado teste";
    };
    Homem.prototype.metodoProtegido = function () {
        return "Retorno protected teste";
    };
    Homem.getPensamentos = function (nome) {
        return "".concat(nome, " pensa em coisas demais...");
        //O this não funciona aqui pois se trata da classe em si, não de um objeto construído apartir dela.
        //Logo, o this.nome ainda não possui valor, sendo ele inexistente.
    };
    return Homem;
}());
var Homem2 = /** @class */ (function (_super) {
    __extends(Homem2, _super);
    function Homem2(nome, altura, forca) {
        return _super.call(this, nome, altura, forca) || this;
    }
    return Homem2;
}(Homem));
var homem1 = new Homem('Igor', 181, 60);
var homem2 = new Homem2('Silva', 181, 60);
// homem1.nome = 'Daniel' //Não permitido e incoerente
// homem1.setNome('Daniel') //Permitido e coerente
// console.log(homem1.getMethods());
// console.log(homem2.metodoPrivado());
// console.log(homem1.Caracteristicas)
// console.log(Homem.getPensamentos('Igor'))
/*
    Classe Abstrata
    É uma classe que não pode ser instanciada, servindo para ser herdada somente.
*/
var Classe1 = /** @class */ (function () {
    function Classe1(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    Classe1.prototype.getProps = function () {
        return this.prop1 + " e " + this.prop2;
    };
    return Classe1;
}());
// const testClasse1 = new Classe1() - REPARE O ERRO, É IMPOSSÍVEL CRIAR INSTÂNCIAS DE CLASSES ABSTRATAS
var Classe2 = /** @class */ (function (_super) {
    __extends(Classe2, _super);
    function Classe2(prop1, prop2) {
        var _this = _super.call(this, prop1, prop2) || this;
        _this.prop1 = prop1;
        return _this;
    }
    return Classe2;
}(Classe1));
//Observe que podemos estender a Classe1, mas não instanciá-la
var Animal = /** @class */ (function () {
    function Animal(name, habits) {
        this.name = name;
        this.habits = habits;
    }
    Animal.prototype.action = function () {
        return "".concat(this.name, " possui ").concat(this.habits, " como h\u00E1bito.");
    };
    return Animal;
}());
var onca = new Animal('Onça', 'Caça');
// onca.name = 'Macaco';
//Veja o erro, pois estou tentando escrever em uma propriedade que é somente leitura.
/*
    FIM
*/
