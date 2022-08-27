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
        console.log("Teste");
        return this.nome + "" + this.sobrenome;
    };
    return funcao;
}());
/*
TSCONFIG.JSON - sourceMap: Permite que arquivos JS emitidos possuam um mapa para serem analisados no ambiente de produção
                *strictNullChecks: Impede que nulos e indefinidos sejam compilados
                *noUsedParameters: Impede que parâmetros não utilizados passem na compilação
                *noUsedLocals: Impede que variáveis não utilizadas passem na copilação

                outDir: determina o destino dos arquivos compilados
                outFile: determina que os arquivos buildados saiam em um só arquivo
*/
function saudar(isManha) {
    var saudacao;
    // let unusedLocal: string;
    if (isManha) {
        saudacao = "Bom dia!";
    }
    else {
        saudacao = "Tenha uma boa vida!";
    }
    return "Saudacao: " + saudacao;
}
