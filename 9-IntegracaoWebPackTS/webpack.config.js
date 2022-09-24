const path = require('path');

const CopyPlugin = require('copy-webpack-plugin'); //plugin para copiar arquivos da pasta public

module.exports = {
    mode: 'development', //modo em que trabalhará o webpack
    entry: './src/assets/ts/main.ts', //arquivo de entrada
    devServer: { //configura o webserver instalado como dependência
        static: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true,
    },
    output:{ //saída
        filename: 'app.min.js', //nome do arquivo
        path: path.join(__dirname, 'dist')//caminho do arquivo
    },
    plugins:[
        new CopyPlugin({
            patterns: [{from: "public"}] 
            //poderia ser from: 'pasta origem', to: 'pasta destino' - assim já associa corretamente
        })
    ],
    resolve:{
        extensions: ['.ts', '.js'] //extensões que o webpack precisará resolver no sistema de modulos
    },
    module:{
        rules: [{ //regras para tratar as extensões
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}