//TSCONFIG.JSON - noEmitOnError:  Se qualquer erro for reportado, nenhum arquivo JS será gerado
let canal: string = 'Gaveta';
let inscritos: number = 987789
// canal = inscritos

//TSCONFIG.JSON - target: essa propriedade diz qual é a versão do JS que será utilizado no arquivo compilado
//se você mudar de es2016 para es3, por exemplo, os recursos de 2016 não serão utilizados
class funcao{
    nome:string
    sobrenome:string
    constructor(nome: string, sobrenome: string){
        this.nome= nome,
        this.sobrenome=sobrenome
    }
    falaNome(): string{
        return this.nome+""+this.sobrenome
    }
}