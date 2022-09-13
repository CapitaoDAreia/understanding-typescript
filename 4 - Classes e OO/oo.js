//Iniciando section 5
/*
    CLASSES

*/
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(25);
// console.log(aniversario.dia+"/0"+aniversario.mes+"/"+aniversario.ano)
//De forma mais simples, temos a mesma coisa:
class DataSimplificada {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
/*
    DESAFIO PRODUTO
    -Atributos: nome, preco e desconto
    -Criar construtor
    -Desconto é opcional
    -Criar dois produtos passando dois e três parâmetros
*/
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} e possui ${this.desconto} de desconto, sendo o seu preço com desconto R$${this.precoComDesconto()}.`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const p1 = new Produto('KitKat', 2.00, 0.1);
const p2 = new Produto('Banana', 0.99);
// console.log(p1.resumo())
/*
    *Modificadores de acesso
    private, public

    *getter e setter

    *static

    *protected

*/
class Homem {
    constructor(nome, altura, forca) {
        this.nome = nome;
        this.altura = altura;
        this.forca = forca;
    }
    ;
    get Caracteristicas() {
        return `${this.nome}, mede ${this.altura} e tem força de ${this.forca}.`;
    }
    setNome(nome) {
        this.nome = nome;
        return `Nome alterado para ${nome}`;
    }
    setAltura(altura) {
        this.altura = altura;
        return `Altura alterada para ${altura}`;
    }
    getMethods() {
        return `Essa classe possui ${this.metodoPrivado()} e também ${this.metodoProtegido()}`;
    }
    metodoPrivado() {
        this.nome = 'Alterado para privado';
        return `Retorno privado teste`;
    }
    metodoProtegido() {
        return `Retorno protected teste`;
    }
    static getPensamentos(nome) {
        return `${nome} pensa em coisas demais...`;
        //O this não funciona aqui pois se trata da classe em si, não de um objeto construído apartir dela.
        //Logo, o this.nome ainda não possui valor, sendo ele inexistente.
    }
}
class Homem2 extends Homem {
    constructor(nome, altura, forca) {
        super(nome, altura, forca);
    }
}
const homem1 = new Homem('Igor', 181, 60);
const homem2 = new Homem2('Silva', 181, 60);
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
class Classe1 {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    getProps() {
        return this.prop1 + " e " + this.prop2;
    }
}
// const testClasse1 = new Classe1() - REPARE O ERRO, É IMPOSSÍVEL CRIAR INSTÂNCIAS DE CLASSES ABSTRATAS
class Classe2 extends Classe1 {
    constructor(prop1, prop2) {
        super(prop1, prop2);
        this.prop1 = prop1;
    }
}
//Observe que podemos estender a Classe1, mas não instanciá-la
