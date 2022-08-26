//TSCONFIG.JSON - noEmitOnError:  Se qualquer erro for reportado, nenhum arquivo JS será gerado
var canal = 'Gaveta';
var inscritos = 987789;
// canal = inscritos
//TSCONFIG.JSON - target: essa propriedade diz qual é a versão do JS que será utilizado no arquivo compilado
//se você mudar de es2016 para es3, por exemplo, os recursos de 2016 não serão utilizados
var funcao = /** @class */ (function () {
    function funcao(nome, sobrenome) {
        this.nome = nome,
            this.sobrenome = sobrenome;
    }
    funcao.prototype.falaNome = function () {
        return this.nome + "" + this.sobrenome;
    };
    return funcao;
}());
