const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {

    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log('posicao', atual)
    console.log('1livro atual',livroAtual)
    let livroMenorPreco = livros[menor];
    console.log('livro menor preco', livroMenorPreco)

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

}

console.log(livros);