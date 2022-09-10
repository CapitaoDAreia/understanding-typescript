//Iniciando section 5

/*
    CLASSES

*/
class Data {
    //atributos públicos por padrão
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano
    }
}
const aniversario = new Data(25);
console.log(aniversario.dia+"/0"+aniversario.mes+"/"+aniversario.ano)

//De forma mais simples, temos a mesma coisa:
class DataSimplificada {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){}
}

/*
    DESAFIO PRODUTO
    -Atributos: nome, preco e desconto
    -Criar construtor
    -Desconto é opcional
    -Criar dois produtos passando dois e três parâmetros
*/
class Produto{
    constructor(
        public nome: string, 
        public preco: number, 
        public desconto: number = 0
    ){}

    public resumo(): string{
        return `${this.nome} custa R$${this.preco} e possui ${this.desconto} de desconto, sendo o seu preço com desconto R$${this.precoComDesconto()}.`
    }

    public precoComDesconto():number{
        return this.preco * (1- this.desconto)
    }

}

const p1 = new Produto('KitKat', 2.00, 0.1);
const p2 = new Produto('Banana', 0.99)
console.log(p1.resumo())